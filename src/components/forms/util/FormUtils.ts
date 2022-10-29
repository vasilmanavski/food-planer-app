export class FormUtils {
  private FormUtils() {

  }

  static getNumber(formData: FormData, param: string) {
    return Number(formData.get(param))
  }

  static getString(formData: FormData, param: string) {
    return String(formData.get(param))
  }
  static resetForm(formData: FormData) {
    let inputs = document.getElementsByTagName("input")
    for (let index = 0; index < inputs.length; ++index) {
      if (inputs[index]['type'] === 'text') {
        inputs[index]['value'] = "";
        inputs[index]['type'] = "text";
      } else {
        inputs[index]['value'] = "";
        inputs[index]['type'] = "number";
      }
    }
  }
}