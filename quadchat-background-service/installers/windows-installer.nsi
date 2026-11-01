!define PRODUCT "QuadChat Background Service"
!define EXE "quadchat-background-service.exe"

Name "${PRODUCT}"
OutFile "dist/quadchat-background-service-windows-x64-setup.exe"
InstallDir "$LOCALAPPDATA\QuadChat Background Service"
RequestExecutionLevel user

Page directory
Page instfiles

Section "Install"
  SetOutPath "$INSTDIR"
  File "target/release/quadchat-background-service.exe"
  CreateShortcut "$DESKTOP\QuadChat Background Service.lnk" "$INSTDIR\${EXE}"
  WriteUninstaller "$INSTDIR\Uninstall.exe"
SectionEnd

Section "Uninstall"
  Delete "$DESKTOP\QuadChat Background Service.lnk"
  Delete "$INSTDIR\${EXE}"
  Delete "$INSTDIR\Uninstall.exe"
  RMDir "$INSTDIR"
SectionEnd
