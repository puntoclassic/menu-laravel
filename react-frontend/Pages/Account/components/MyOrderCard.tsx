import { Link } from "@inertiajs/react";
import { OrderCardItem } from "@react-src/types";
import route from "ziggy-js";


export default function MyOrderCard({ order }: { order: OrderCardItem }) {
    console.log(order);
    return <>
        <Link className="w-full md:w-1/3" href={route("ordini.view", { id: order.id })}>
            <div className="bg-red-100/30 p-4 shadow">
                <div className="flex flex-col space-y-2">
                    <p className="font-bold">Ordine #{order.id}</p>
                    <div className="flex flex-row items-center">
                        <div className="w-1/3 flex font-semibold">
                            <p>Stato</p>
                        </div>
                        <div className="w-2/3 flex items-center justify-end">
                            <span>{order.order_status.name}</span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="w-1/3 flex font-semibold">
                            <p>Totale</p>
                        </div>
                        <div className="w-2/3 flex items-center justify-end">
                            <span>{order.total} €</span>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <Link className="underline text-red-900" href={route("ordini.view", { id: order.id })}>
                            Dettaglio ordine
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    </>
}
