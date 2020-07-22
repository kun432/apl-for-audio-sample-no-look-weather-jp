/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    en: {
        translation: {
            SKILL_NAME: 'APL Weather',
            HELP_MESSAGE: 'You can say what\'s the weather, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            FALLBACK_MESSAGE: 'The APL Weather skill can\'t help you with that.  It can tell you the weather if you say tell me the weather. What can I help you with?',
            FALLBACK_REPROMPT: 'What can I help you with?',
            ERROR_MESSAGE: 'Sorry, an error occurred.',
            STOP_MESSAGE: 'Goodbye!',
            WEATHER_REPORT: 'Right now it\'s {{currentTemp}} degrees and {{weatherDescription}}.'
        }
    },
    ja: {
        translation: {
            SKILL_NAME: 'お天気のサンプル',
            HELP_MESSAGE: 'お天気を教えて、または、やめる、と言ってください。どうしますか？',
            HELP_REPROMPT: 'どうしますか？',
            FALLBACK_MESSAGE: 'ごめんなさい、うまく聞き取れませんでした。お天気を知りたい場合は、お天気を教えて、と言ってください。どうしますか？',
            FALLBACK_REPROMPT: 'どうしますか？',
            ERROR_MESSAGE: 'ごめんなさい、エラーが発生しました。',
            STOP_MESSAGE: 'バイバイ',
            WEATHER_REPORT: '現在の気温は {{currentTemp}} 度、天気は {{weatherDescription}} です。'
        }
    }
}