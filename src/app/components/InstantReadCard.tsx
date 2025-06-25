import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

export function InstantReadCard() {
    const [lastDhtRead, setLastDhtRead] = useState<{
        temperature: number | undefined;
        humidity: number | undefined;
        heatIndex: number | undefined;
        timestamp: string;
    }>({ temperature: undefined, humidity: undefined, heatIndex: undefined, timestamp: "Reading..." });

    async function getDhtInstantRead() {
        fetch('/api/dht/now',
            { method: "GET" }
        ).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).then((response) => {
            setLastDhtRead({ ...response, timestamp: new Date(response.timestamp).toLocaleString() });
        }).catch((err) => console.error(err));
    }

    useEffect(() => {
        const instantReadInterval = setInterval(() => { getDhtInstantRead(); }, 5000);

        return () => {
            clearInterval(instantReadInterval);
        }
    }, []);

    return <Card>
        <CardHeader>
            <CardTitle className='text-left'>DHT11 (Last read: {lastDhtRead.timestamp})</CardTitle>
        </CardHeader>
        <CardContent>
            <table className='w-full'>
                <tbody>
                    <tr className="odd:bg-muted m-0 border-t p-0 ">
                        <td className="border px-4 py-2 text-center">
                            Temperature
                        </td>
                        <td className="border px-4 py-2 text-center">
                            {lastDhtRead.temperature?.toFixed(2) || "Reading..."}
                        </td>
                    </tr>
                    <tr className="even:bg-muted m-0 border-t p-0 ">
                        <td className="border px-4 py-2 text-center">
                            Humidity
                        </td>
                        <td className="border px-4 py-2 text-center">
                            {lastDhtRead.humidity?.toFixed(2)  || "Reading..."}
                        </td>
                    </tr>
                    <tr className="odd:bg-muted m-0 border-t p-0 ">
                        <td className="border px-4 py-2 text-center">
                            Heat Index
                        </td>
                        <td className="border px-4 py-2 text-center">
                            {lastDhtRead.heatIndex?.toFixed(2) || "Reading..."}
                        </td>
                    </tr>
                </tbody>
            </table>
        </CardContent>
    </Card>
}