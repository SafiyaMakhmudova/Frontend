import { useToast } from "vue-toastification";

const toast = useToast();

function successToast(msg, options) {
  return toast.success(msg, options);
}
function infoToast(msg, options) {
  return toast.info(msg, options);
}
function warningToast(msg, options) {
  return toast.warning(msg, options);
}
function errorToast(msg, options) {
  return toast.error(msg, options);
}

export { successToast, errorToast, infoToast, warningToast };