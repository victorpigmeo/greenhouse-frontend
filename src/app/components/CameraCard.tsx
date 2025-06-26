import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function CameraCard() {

    return <Dialog>
        <Card>
            <CardHeader>
                <CardTitle className='text-left'>
                    <div className="flex justify-between">
                        <h2>Camera</h2>

                        <DialogTrigger asChild>
                            <Button ><i className="bi-camera"></i></Button>
                        </DialogTrigger>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <iframe src="http://localhost:8889/cam" className="responsive-iframe"></iframe>

                <DialogContent className="min-w-full min-h-full justify-center">
                    <DialogHeader>
                        <DialogTitle>Camera</DialogTitle>
                    </DialogHeader>
                    <div className="h-full w-full">
                        <iframe src="http://localhost:8889/cam" className="full-screen-iframe"></iframe>
                    </div>
                </DialogContent>
            </CardContent>
        </Card>
    </Dialog>
}