@extends('layouts.main')
@section('main')

<!-- Contact Start -->
<div class="container-fluid py-5">
    <div class="container">
        <div class="mx-auto text-center mb-5" style="max-width: 500px;">
            <h6 class="text-primary text-uppercase">Login Page</h6>
            <h1 class="display-5"></h1>
        </div>
        <div class="row g-0">
            <center>

            <div class="col-lg-7">
                <div class="bg-primary h-100 p-5">
                     <h4>Login</h4>
                    <form action="/insert" method="post">

                        @if(session('message'))
                        <div class="alert alert-Success">{{session('message')}}</div>
                        @endif
                        @csrf
                        <div class="row g-3">
                            <div class="col-6">
                                <input type="text"name="username" class="form-control bg-light border-0 px-4" placeholder="username" style="height: 55px;">
                            </div>
                            
                            <div class="col-6">
                                <input type="password"name="password" class="form-control bg-light border-0 px-4" placeholder="password" style="height: 55px;">
                            </div>
                           
                            <div class="col-12">
                                <button class="btn btn-secondary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </center>
                </div>
            </div>
            
    </div>
</div>
<!-- Contact End -->

@endsection