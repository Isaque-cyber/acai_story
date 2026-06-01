import { test, expect } from '@playwright/test';

test('abre home', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await expect(
    page.getByRole('heading', { name: 'Açaí Story' })
  ).toBeVisible();
});

test('exibe botão entrar', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await expect(
    page.getByRole('button', { name: 'Entrar' })
  ).toBeVisible();
});

test('abre página login', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await expect(
    page.getByRole('heading', { name: 'Login' })
  ).toBeVisible();
});

test('exibe campo email', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await expect(
    page.getByPlaceholder('Email')
  ).toBeVisible();
});

test('exibe campo senha', async ({ page }) => {
  await page.goto('http://localhost:5173/login');

  await expect(
    page.getByPlaceholder('Senha')
  ).toBeVisible();
});

test('abre página produtos', async ({ page }) => {
  await page.goto('http://localhost:5173/produtos');

  await expect(
    page.getByRole('heading', { name: 'Produtos' })
  ).toBeVisible();
});

test('lista produto açaí 500ml', async ({ page }) => {
  await page.goto('http://localhost:5173/produtos');

  await expect(
    page.getByText('Açaí 500ml')
  ).toBeVisible();
});