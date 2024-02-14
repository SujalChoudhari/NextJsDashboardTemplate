/**
 * v0 by Vercel.
 * @see https://v0.dev/t/uXD5iqBxYi8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Package2Icon, SearchIcon, ChevronLeftIcon, ChevronRightIcon, Edit2 } from "lucide-react"
import { Card } from "@/components/ui/card"


const ordersData = [
    { orderId: 'ORD001', publication: 'Sophia Anderson', status: 'Uploaded', links: ['1', '2'], date: 'June 23, 2022' },
    { orderId: 'ORD001', publication: 'Sophia Anderson', status: 'Uploaded', links: ['1', '2'], date: 'June 23, 2022' },
    { orderId: 'ORD001', publication: 'Sophia Anderson', status: 'Uploaded', links: ['1', '2'], date: 'June 23, 2022' },
    // Add more orders as needed
];

export default function Component() {
    return (
        <Card className="w-[75lvw]">
            <div className="flex flex-col w-full min-h-screen">
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
                    <div className="flex flex-col gap-2">
                        <div className="font-semibold text-2xl">Status</div>
                        <div className="text-gray-500 dark:text-gray-400">View the status of all orders</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="w-full overflow-hidden rounded-lg border">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="w-[100px]">Order ID</TableHead>
                                        <TableHead>Publication</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Links</TableHead>
                                        <TableHead>Date</TableHead>
                                        <TableHead>Edit</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {/* Map through the orders data and render rows dynamically */}
                                    {ordersData.map(order => (
                                        <TableRow key={order.orderId}>
                                            <TableCell className="font-medium">{order.orderId}</TableCell>
                                            <TableCell>{order.publication}</TableCell>
                                            <TableCell>{order.status}</TableCell>
                                            <TableCell>
                                                {!!order.links.length && order.links.map((link, i) => (
                                                    <Link href={link} key={link}> Link{i} </Link>
                                                ))}
                                            </TableCell>
                                            <TableCell>{order.date}</TableCell>
                                            <TableCell><Link href={'#'}><Edit2/> Edit</Link></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                        <div className="flex items-center justify-between w-full gap-4">
                            <div className="flex items-center gap-2 text-sm">
                                <div className="text-gray-500 dark:text-gray-400">Showing {ordersData.length} entries</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button className="rounded-full" size="icon" variant="outline">
                                    <ChevronLeftIcon className="w-4 h-4" />
                                    <span className="sr-only">Previous</span>
                                </Button>
                                <Button className="rounded-full" size="icon" variant="outline">
                                    <ChevronRightIcon className="w-4 h-4" />
                                    <span className="sr-only">Next</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Card>
    )
}
