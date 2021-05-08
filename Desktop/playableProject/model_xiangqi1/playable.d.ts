
function sendEvent(event: 'startPlayPlayable' | 'finishPlayPlayable' | 'loadMainScene'): void;


/**
 * 
 * @param event enterSection--进入某一环节  
 * autoClick--这个现在头条已经关掉了，但是防止接口不匹配还是先放着
 * @param params window.playableSDK.sendEvent('enterSection', { section: 'section2' });
 */
function sendEvent(
    event: 'enterSection' | 'autoClick',
    params: {
        section: string;
    }
): void;

/**
 * 
 * @param event clickDownloadBar--点击全程下载按钮转化   
 * clickResurrection--点击复活转化  
 * clickContent--点击内容区域转化   
 * clickFinishDownloadBar--点击结束页面下载按钮转化     
 * clickFinishContent--点击结束页面元素转化
 * @param params * 范例：window.playableSDK.sendEvent('clickContent', {section: 'section2', area: 'area3'});    
 * section和area的范围为section1，area1到section10，area10
 */
function sendEvent(
    event: 'clickDownloadBar' | 'clickResurrection' | 'clickContent' | 'clickFinishDownloadBar' | 'clickFinishContent',
    params: {
        section: string;
        area: string;
    }
): void;

interface Window {
    playableSDK: {
        openAppStore: () => void;
        sendEvent: typeof sendEvent;
    };
}