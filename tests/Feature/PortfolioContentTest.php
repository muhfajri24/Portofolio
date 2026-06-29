<?php

namespace Tests\Feature;

use Tests\TestCase;

class PortfolioContentTest extends TestCase
{
    public function test_the_homepage_contains_new_project_entries(): void
    {
        $response = $this->get('/');

        $response->assertOk();
        $response->assertSee('Financial Transaction Clustering Submission');
        $response->assertSee('Customer Churn Prediction');
        $response->assertSee('Customer Segmentation');
        $response->assertSee('Gojek Review Insight');
        $response->assertSee('Sales Forecasting');
    }

    public function test_the_homepage_contains_laravel_portfolio_copy(): void
    {
        $response = $this->get('/');

        $response->assertOk();
        $response->assertSee('Portfolio Laravel');
        $response->assertSee('Laravel');
        $response->assertSee('Backend Developer Intern');
    }
}
