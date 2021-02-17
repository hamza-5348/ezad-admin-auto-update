import {QSpinnerFacebook} from "quasar";

const showAppLoader = (ctx, message = 'Loading...') => {
  ctx.$q.loading.show({
    spinner: QSpinnerFacebook,
    spinnerColor: '#4A90E2',
    spinnerSize: 120,
    // backgroundColor: 'purple',
    message: `<h4>${message}</h4>`,
    messageColor: 'black'
  })
}

const hideAppLoader = (ctx) => {
  ctx.$q.loading.hide()
}

const showAppNotification = (ctx) => {

  ctx.$q.notify({
    color: 'accent',
    textColor: 'white',
    icon: 'cloud_done',
    message: 'Logged In Successfully'
  })

}

const showAppLoadingBar = (ctx) => {

  ctx.$q.loadingBar.setDefaults({
    color: 'indigo',
    size: '5px',
    position: 'top'
  })
  ctx.$q.loadingBar.start(50)
}

const hideAppLoadingBar = (ctx) => {
  ctx.$q.loadingBar.stop()
}
export default {
  showAppLoader,
  hideAppLoader,
  showAppNotification,
  showAppLoadingBar,
  hideAppLoadingBar
}

