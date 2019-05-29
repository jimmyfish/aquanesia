<?php

namespace App\Http\Controllers\Scraper;

use Goutte\Client;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DoScrapeAction extends Controller
{
    public function __invoke(Request $request)
    {
        return "COK";
    }
}
