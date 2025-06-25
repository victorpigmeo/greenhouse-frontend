import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart";
import { LabelList, Line, LineChart, XAxis, YAxis } from "recharts";

const chartConfig = {
    temperature: {
        label: "Temperature",
        color: "var(--chart-1)",
    },
    humidity: {
        label: "Humidity",
        color: "var(--chart-2)",
    },
    heatIndex: {
        label: "Heat Index",
        color: "var(--chart-3)",
    }
} satisfies ChartConfig

export function ChartCard({ title, data, dataKey }: { title: string, data?: [], dataKey: string }) {
    return <Card>
        <CardHeader>
            <CardTitle className="text-left ml-6">{title}</CardTitle>
        </CardHeader>

        <CardContent>
            <ChartContainer config={chartConfig} >
                <LineChart accessibilityLayer
                    data={data}
                    margin={{
                        top: 10,
                        right: 20
                    }}>
                    <YAxis dataKey={dataKey}
                        tickLine={true}
                        axisLine={true}
                        tickMargin={8}
                        fontSize={12} />
                    <XAxis
                        dataKey="timestamp"
                        tickLine={true}
                        axisLine={true}
                        tickMargin={10}
                        fontSize={8}
                    />

                    <Line
                        dataKey={dataKey}
                        type="natural"
                        stroke={"var(--color-" + dataKey + ")"}
                        strokeWidth={2}
                        dot={{
                            fill: "var(--color-" + dataKey + ")",
                        }}>
                        <LabelList
                            position="bottom"
                            offset={10}
                            className="fill-foreground"
                            fontSize={10}
                        />
                    </Line>

                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                    />
                </LineChart>
            </ChartContainer>
        </CardContent>
    </Card>;
}