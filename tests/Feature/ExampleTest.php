<?php

namespace Tests\Feature;

use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_the_portfolio_homepage_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertOk();
        $response->assertSee('Muhammad Fajri');
        $response->assertSee('window.portfolioData', false);
    }
}
