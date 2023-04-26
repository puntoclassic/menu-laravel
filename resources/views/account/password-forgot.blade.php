@extends('layouts')

@section('title', 'Recupera password')

@section('topbarLeft')
    <x-global-search-form></x-global-search-form>
@endsection

@section('topbarRight')
    <x-cart-button></x-cart-button>
    <x-account-manage></x-account-manage>
@endsection

@section('header')
    <x-header></x-header>
@endsection

@section('nav')
    <div class="flex h-16">
        <ol class="breadcrumb-container">
            <li>
                <a class="breadcrumb-link" href="{{ route('login') }}">
                    Profilo
                </a>
            </li>
            <li>::</li>
            <li>Recupera password</li>
        </ol>
    </div>
@endsection

@section('content')

    <div class="px-4 pt-4">
        <x-messages></x-messages>
    </div>
    <div class='flex flex-grow justify-center items-center'>

        <form method="post" class="w-full p-16 md:p-0 md:w-1/2 lg:w-1/3 flex flex-col space-y-2"
            action="{{ route('password.email') }}">
            @csrf
            <p>Compila il form per recuperare la tua password</p>
            <div class="flex flex-col space-y-2">
                <label class="form-label">Email</label>
                <input type="text" name="email" class="text-input @error('email') text-input-invalid @enderror" />
                @error('email')
                    <div class="invalid-feedback">
                        {{ $message }}
                    </div>
                @enderror
            </div>
            <div class="flex flex-row space-x-2 pt-4">
                <button type="submit" class="btn-primary">Recupera password</button>
            </div>
        </form>
    </div>
@endsection
