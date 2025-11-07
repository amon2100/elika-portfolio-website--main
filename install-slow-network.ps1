Write-Host "Installing dependencies with slow network optimizations..." -ForegroundColor Cyan
Write-Host "This will use cached packages when available and skip time-consuming checks." -ForegroundColor Yellow
Write-Host ""

Set-Location $PSScriptRoot

# Install with slow network optimizations
npm.cmd install --prefer-offline --no-audit --loglevel=warn --progress=false

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Installation completed successfully!" -ForegroundColor Green
    Write-Host "You can now run: npm run dev" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Installation encountered an error. Try running: npm install" -ForegroundColor Red
}

