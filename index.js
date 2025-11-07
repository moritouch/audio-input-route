import { requireNativeModule, EventEmitter } from 'expo-modules-core';

const AudioInputRouteModule = requireNativeModule('AudioInputRoute');

export async function getAudioInputRoute() {
  return await AudioInputRouteModule.getAudioInputRoute();
}

const emitter = new EventEmitter(AudioInputRouteModule);

export function addAudioRouteChangeListener(
  listener
) {
  return emitter.addListener('onAudioRouteChange', listener);
}
