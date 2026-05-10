@echo off
setlocal enabledelayedexpansion

echo ============================================
echo   AI Agent Skill Updater
echo   BIVA + KIM + Thomas
echo ============================================
echo.

:: Set the folder where repos will live
set ROOT=%USERPROFILE%\AI-Agents
set SKILLS_OUT=%ROOT%\skills

:: Create folders if they don't exist
if not exist "%ROOT%" mkdir "%ROOT%"
if not exist "%SKILLS_OUT%" mkdir "%SKILLS_OUT%"

echo Repos folder: %ROOT%
echo Skills output: %SKILLS_OUT%
echo.

:: ── BIVA ──────────────────────────────────────
echo [1/3] BIVA...
if exist "%ROOT%\BIVA\.git" (
    echo   Already cloned. Pulling latest...
    cd /d "%ROOT%\BIVA"
    git pull
) else (
    echo   Not cloned yet. Cloning...
    cd /d "%ROOT%"
    git clone https://github.com/gotsetthawut/BIVA.git
)
echo   Packaging biva.skill...
powershell -Command "Compress-Archive -Path '%ROOT%\BIVA\*' -DestinationPath '%SKILLS_OUT%\biva.skill' -Force"
if exist "%SKILLS_OUT%\biva.skill" (echo   biva.skill OK) else (echo   ERROR: biva.skill failed)
echo.

:: ── KIM ───────────────────────────────────────
echo [2/3] KIM...
if exist "%ROOT%\kim-agent\.git" (
    echo   Already cloned. Pulling latest...
    cd /d "%ROOT%\kim-agent"
    git pull
) else (
    echo   Not cloned yet. Cloning...
    cd /d "%ROOT%"
    git clone https://github.com/gotsetthawut/kim-agent.git
)
echo   Packaging kim.skill...
powershell -Command "Compress-Archive -Path '%ROOT%\kim-agent\*' -DestinationPath '%SKILLS_OUT%\kim.skill' -Force"
if exist "%SKILLS_OUT%\kim.skill" (echo   kim.skill OK) else (echo   ERROR: kim.skill failed)
echo.

:: ── THOMAS ────────────────────────────────────
echo [3/3] Thomas...
if exist "%ROOT%\thomas-agent\.git" (
    echo   Already cloned. Pulling latest...
    cd /d "%ROOT%\thomas-agent"
    git pull
) else (
    echo   Not cloned yet. Cloning...
    cd /d "%ROOT%"
    git clone https://github.com/gotsetthawut/thomas-agent.git
)
echo   Packaging thomas.skill...
powershell -Command "Compress-Archive -Path '%ROOT%\thomas-agent\*' -DestinationPath '%SKILLS_OUT%\thomas.skill' -Force"
if exist "%SKILLS_OUT%\thomas.skill" (echo   thomas.skill OK) else (echo   ERROR: thomas.skill failed)
echo.

:: ── DONE ──────────────────────────────────────
echo ============================================
echo   All skills updated!
echo ============================================
echo.
echo Your .skill files are here:
echo   %SKILLS_OUT%
echo.
echo Next step: drag all 3 .skill files into Cowork.
echo.

:: Open the skills folder automatically
explorer "%SKILLS_OUT%"

pause