$repo = "slideshow-dist"
$binary = "slideshow-win.exe"

$curpath = [Environment]::GetEnvironmentVariable('Path', 'User')
function Set-PathVariable {
    param (
        [string]$AddPath,
        [string]$RemovePath
    )
    $regexPaths = @()
    if ($PSBoundParameters.Keys -contains 'AddPath'){
        $regexPaths += [regex]::Escape($AddPath)
    }

    if ($PSBoundParameters.Keys -contains 'RemovePath'){
        $regexPaths += [regex]::Escape($RemovePath)
    }
    
    $arrPath = $curpath -split ';'
    foreach ($path in $regexPaths) {
        $arrPath = $arrPath | Where-Object {$_ -notMatch "^$path\\?"}
    }
    $newpath = ($arrPath + $addPath) -join ';'
    [Environment]::SetEnvironmentVariable("Path", $newpath, 'User')
}

$installPath = "~\github.kkibria"
$latest = ("https://github.com/kkibria/" + $repo + "/releases/latest")

Write-Output "Preparing install directory..."
New-Item -Path $installPath -ItemType Directory -Force | Out-Null
$f = (Convert-Path $installPath)
Write-Output ("install directory '" + $f + "' created.")
Write-Output ("{"+ $binary + " install: " + $curpath + "}") >> ($f+"\.path.backup")
Write-Output "Backing up path variable..."
Write-Output "Updating path variable..."
Set-PathVariable $f 
$a = $latest+"/download/"+$binary
$b = $f+"\"+$binary
Write-Output "Downloading excutable to install directory..."
Invoke-WebRequest -Uri $a -OutFile $b
Write-Output "Install complete."