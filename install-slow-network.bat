@echo off
echo Installing dependencies with slow network optimizations...
echo This will use cached packages when available and skip time-consuming checks.
echo.
cd /d "%~dp0"
npm.cmd install --prefer-offline --no-audit --loglevel=warn --progress=false
if %ERRORLEVEL% EQU 0 (
    echo.
    echo Installation completed successfully!
    echo You can now run: npm run dev
) else (
    echo.
    echo Installation encountered an error. Try running: npm install
)
pause

