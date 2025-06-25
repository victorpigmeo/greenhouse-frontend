import { Separator } from '@/components/ui/separator';
import { useEffect, useState } from 'react';
import { CameraCard } from './components/CameraCard';
import { ChartCard } from './components/ChartCard';
import { ControlsCard } from './components/ControlsCard';
import { InstantReadCard } from './components/InstantReadCard';

export function Home() {

    const [historicalData, setHistoricalData] = useState<[] | undefined>(undefined);

    async function getHistoricalData() {
        const endDate = new Date();
        const startDate = new Date().setMinutes(endDate.getMinutes() - 15);

        fetch('/api/dht?' + new URLSearchParams({ from: startDate.toString(), to: endDate.getTime().toString() }).toString(),
            { method: "GET" }
        ).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).then((response) => {
            setHistoricalData(response.map((item: any) => ({ ...item, timestamp: new Date(item.timestamp).toLocaleString() })));
        }).catch((err) => console.error(err))
            .finally(() => { console.log("TODO: implement loading") });
    }

    useEffect(() => {
        getHistoricalData();

        const historicalDataInterval = setInterval(() => getHistoricalData(), 60000);

        return () => {
            clearInterval(historicalDataInterval);
        }
    }, []);

    return <>
        <div>
            <h2 className='text-left'>Telemetry</h2>
            <Separator className="my-4" />

            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <InstantReadCard></InstantReadCard>
                <ControlsCard></ControlsCard>
                <CameraCard></CameraCard>
            </div>
        </div>
        <div className='m-6'></div>
        <div>
            <h2 className='text-left'>History (Last 15 minutes)</h2>
            <Separator className="my-4" />

            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                <ChartCard title="Temperature" data={historicalData} dataKey='temperature'></ChartCard>
                <ChartCard title="Humidity" data={historicalData} dataKey='humidity'></ChartCard>
                <ChartCard title="Heat Index" data={historicalData} dataKey='heatIndex'></ChartCard>
            </div>
        </div>
    </>;
}