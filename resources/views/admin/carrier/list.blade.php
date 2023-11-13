@extends('layout')

@section('title') Corrieri @stop

@section('topbar')
    <div class="w-full bg-red-900 flex flex-col md:flex-row p-1">
        <div class="w-full md:w-3/4 flex p-2 justify-center md:justify-start">
            <x-home-button></x-home-button>
        </div>
        <div class="w-full md:w-1/4 flex flex-row p-2 justify-center md:justify-end">
            <x-cart-button></x-cart-button>
            <x-account-manage></x-account-manage>
        </div>
    </div>
@stop

@section('navHeader')
    <ol class="flex flex-row space-x-2 items-center pl-8 text-white h-16">
        <li>
            <a class="breadcrumb-link" href="{{ route('account.index') }}">Profilo</a>
        </li>
        <li>::</li>
        <li>Vendite</li>
        <li>::</li>
        <li>Corrieri</li>
    </ol>
@stop

@section('content')
    <div class="pl-8 pr-8 pt-8 flex flex-col space-y-4 pb-8 flex-grow">
        <x-messages></x-messages>
        <div class="w-full pb-4">
            <p class="text-2xl antialiased font-bold">Corrieri</p>
        </div>
        <div class="flex w-full bg-gray-100 p-2">
            <div class="w-1/2">
                <div class="flex">
                    <a href={{ route('admin.carrier.create') }} class="btn-primary">Crea</a>
                </div>
            </div>
            <div class="w-1/2 flex justify-end">
                <x-admin-search placeholder="Cerca un corriere"></x-admin-search>
            </div>
        </div>
        <div class="flex w-full flex-grow">
            <table class="w-full flex flex-col">
                <thead>
                    <tr class="h-10 flex flex-row items-center">
                        <th class="w-1/12 text-center">
                            <x-admin-order-toggler class="flex w-full flex-row space-x-1 justify-center" label="Id"
                                field="id"></x-admin-order-toggler>
                        </th>
                        <th class="w-3/12 text-left">
                            <x-admin-order-toggler class="flex w-full flex-row space-x-1 justify-start" label="Nome"
                                field="name"></x-admin-order-toggler>
                        </th>
                        <th class="w-2/12 text-left">
                            <x-admin-order-toggler class="flex w-full flex-row space-x-1 justify-start" label="Costo"
                                field="costs"></x-admin-order-toggler>
                        </th>
                        <th class="w-full text-center">Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($data as $carrier)
                        <tr class="h-10 w-full odd:bg-gray-100 flex-row flex flex-grow">
                            <td class="w-1/12 text-center flex items-center justify-center">{{ $carrier->id }}
                            </td>
                            <td class="w-3/12 text-start flex items-center">{{ $carrier->name }}</td>
                            <td class="w-2/12 text-start flex items-center">{{ number_format($carrier->costs, 2) }} €</td>
                            <td
                                class="w-full  text-center flex flex-row space-x-2 items-center content-center justify-center">
                                <x-admin-edit-button :link="route('admin.carrier.edit', ['carrier' => $carrier])"></x-admin-edit-button>
                                <x-admin-delete-button :link="route('admin.carrier.delete', ['carrier' => $carrier])"></x-admin-delete-button>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
        <div class="w-full flex px-4 py-4">
            <x-admin-per-page></x-admin-per-page>
        </div>
        <div class="w-full flex px-4 py-4 bg-gray-100">
            {{ $data->links('globals.admin-paginator') }}
        </div>
    </div>
    </div>
@stop