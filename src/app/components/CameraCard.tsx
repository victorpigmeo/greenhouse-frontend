import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function CameraCard() {
    return <Card>
        <CardHeader>
            <CardTitle className='text-left'>Camera</CardTitle>
        </CardHeader>
        <CardContent>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="flex justify-center">
                        <img src="https://a2211a6eacec.ngrok.app/mjpeg" className="w-45" />
                    </div>
                </DialogTrigger>

                <DialogContent className="min-w-fit">
                    <DialogHeader>
                        <DialogTitle>Camera</DialogTitle>
                    </DialogHeader>
                    <div className="h-full w-full">
                        <img src="https://a2211a6eacec.ngrok.app/mjpeg" className="h-full w-full" />
                    </div>
                </DialogContent>
            </Dialog>
        </CardContent>
    </Card>
}