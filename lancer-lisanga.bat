@echo off
chcp 65001 >nul
title Lisanga - Serveur de developpement
cd /d "%~dp0"

echo ============================================
echo            Lancement de Lisanga
echo ============================================
echo.

REM Verifier que Node.js est installe
where node >nul 2>nul
if errorlevel 1 (
    echo [ERREUR] Node.js n'est pas installe ou introuvable.
    echo Telechargez-le sur https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Installer les dependances si node_modules est absent
if not exist "node_modules" (
    echo [INFO] Installation des dependances en cours...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo [ERREUR] L'installation des dependances a echoue.
        pause
        exit /b 1
    )
    echo.
)

echo [INFO] Demarrage du serveur de developpement...
echo [INFO] L'application sera disponible sur http://localhost:5173/
echo [INFO] Appuyez sur Ctrl+C pour arreter le serveur.
echo.

REM Ouvrir le navigateur apres un court delai puis lancer Vite
start "" cmd /c "timeout /t 3 >nul & start http://localhost:5173/"
call npm run dev

pause
