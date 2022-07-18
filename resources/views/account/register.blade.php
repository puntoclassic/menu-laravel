@extends('layouts')

@section('title', 'Crea account')

@section('topbar')
<x-topbar>
    <div class="col-lg-4 d-flex justify-content-start align-items-center p-2">
        <x-home-button></x-home-button>
    </div>
    <div class="col-lg-4">
    </div>
    <div class="col-lg-4 d-flex justify-content-end align-items-center p-2 ">
        <x-cart-button></x-cart-button>
    </div>
</x-topbar>
@endsection

@section('header')
<x-header></x-header>
@endsection



@section('content')
<x-breadcrumb>
    <li class="breadcrumb-item">
        <a class='text-light' href="{{route("home")}}">Home</a>
    </li>
    <li class=" breadcrumb-item active text-light" aria-current="page">Crea account</li>
</x-breadcrumb>
<x-messages></x-messages>
<div class="row g-0  d-flex flex-grow-1">
    <div class="col-lg-12 p-4 d-flex flex-column align-items-center justify-content-center">
        <p>Compila il form per creare il tuo account</p>
        <form class="row col-lg-4" method="post">
            @csrf

            <div class="mb-3 form-group">
                <label class="form-label">Nome</label>
                <input type="text" name="firstname" value="{{old('firstname')}}" class="form-control @error('firstname') is-invalid @enderror" />
                @error('firstname')
                <div class="invalid-feedback">
                    {{ $message }}
                </div>
                @enderror
            </div>

            <div class="mb-3 form-group">
                <label class="form-label">Cognome</label>
                <input type="text" name="lastname" value="{{old('lastname')}}" class="form-control @error('lastname') is-invalid @enderror" />
                @error('lastname')
                <div class="invalid-feedback">
                    {{ $message }}
                </div>
                @enderror
            </div>

            <div class="mb-3 form-group">
                <label class="form-label">Email</label>
                <input type="text" name="email" value="{{old('email')}}" class="form-control @error('email') is-invalid @enderror">
                @error('email')
                <div class="invalid-feedback">
                    {{ $message }}
                </div>
                @enderror
            </div>
            <div class="mb-3 form-group">
                <label for="inputPassword" class="form-label">Password</label>
                <input type="password" name="password" class="form-control @error('password') is-invalid @enderror" />
                @error('password')
                <div class="invalid-feedback">
                    {{ $message }}
                </div>
                @enderror
            </div>
            <div class="mb-3 form-group">
                <label for="inputPassword" class="form-label">Conferma password</label>
                <input type="password" name="password_confirmation" class="form-control @error('password_confirmation') is-invalid @enderror">
                @error('password_confirmation')
                <div class="invalid-feedback">
                    {{ $message }}
                </div>
                @enderror
            </div>
            <div class="mb-3 form-group">
                <button type="submit" class="btn btn-success">Crea account</button>
            </div>
        </form>
    </div>
</div>
@endsection
