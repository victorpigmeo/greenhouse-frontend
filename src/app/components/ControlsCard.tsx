import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ControlsCard() {
    function gpioControl(pin: number) {
        fetch("/api/gpio/" + pin,
            { method: "PUT" }
        ).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        }).then((response) => {
            console.log(response);
        }).catch((err) => console.error(err))
            .finally(() => { console.log("TODO: implement loading") });

    };
    
    return <Card>
        <CardHeader>
            <CardTitle className='text-left'>Controls</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col gap-3">
                <Button className="w-full" onClick={() => gpioControl(13)} >
                    <i className="bi-sunrise"></i> Lights
                </Button>
                <Button className="w-full" onClick={() => gpioControl(15)}>
                    <i className="bi-droplet-half"></i> Water Pump
                </Button>
                <Button className="w-full" onClick={() => gpioControl(12)}>
                    <i className="bi-fan"></i> Fan
                </Button>
            </div>
        </CardContent>
    </Card>
}