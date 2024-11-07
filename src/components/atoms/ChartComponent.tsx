import colors from '@/utils/colors';
import React from 'react';
import Chart from "react-apexcharts";

interface Props {
    xaxisData: string[],
    data: number[],
}

const ChartComponent: React.FC<Props> = ({ xaxisData, data }) => {
    return (
        <Chart
            options={{
                chart: {
                    id: "basic-bar",
                    toolbar: { show: false },
                },
                xaxis: {
                    categories: xaxisData,
                    labels: {
                        style: {
                            colors: colors.textColor,
                        }
                    },
                    axisBorder: { show: false },
                    axisTicks: { show: false },
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: colors.textColor
                        }
                    }
                },
                colors: [colors.chartColor, colors.secondary, colors.primary,],
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        columnWidth: "50%",

                    }

                },
                dataLabels: {
                    enabled: true,
                    formatter: (val) => ``,
                    style: {
                        colors: [colors.textColor],
                    }
                },
                grid: {
                    show: false,
                },
                tooltip: {
                    enabled: true,
                    theme: "dark",
                    marker: {
                        show: true,
                    },
                    y: {
                        formatter: (val) => `${val}`,
                    }
                },
            }}
            series={[
                {
                    name: "Total",
                    data: data
                }
            ]}
            type="bar"
            width="100%"
            height="250"
        />
    );
};

export default ChartComponent;
