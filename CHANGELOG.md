# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- iOS: Replace deprecated `allowBluetooth` with `allowBluetoothHFP` option in AVAudioSession configuration

## [1.0.0] - 2025-11-07

### Added
- Initial release
- iOS audio input route detection
- Support for detecting microphone types (built-in, Bluetooth, wired headset)
- Real-time audio route change notifications
- Expo module implementation with Swift
