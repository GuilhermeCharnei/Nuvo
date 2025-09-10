@echo off
echo ========================================
echo NUVO WOODWORK - Setup para Windows
echo ========================================
echo.

echo Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERRO: Node.js nao encontrado!
    echo Por favor, instale Node.js de: https://nodejs.org
    pause
    exit /b 1
)

echo Node.js encontrado!
node --version

echo.
echo Verificando npm...
npm --version

echo.
echo Instalando dependencias...
npm install

if %errorlevel% neq 0 (
    echo ERRO: Falha ao instalar dependencias!
    pause
    exit /b 1
)

echo.
echo ========================================
echo Setup concluido com sucesso!
echo ========================================
echo.
echo Para iniciar o projeto, execute:
echo npm run dev
echo.
echo Depois acesse: http://localhost:3000
echo.
pause