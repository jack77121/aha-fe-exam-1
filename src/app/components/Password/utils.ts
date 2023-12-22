export type CheckListType = {
  hasUpperCase: boolean
  hasLowerCase: boolean
  hasNumber: boolean
  hasSpecial: boolean
  isLongerT8: boolean
}

export function Validation(input: string): CheckListType {
  const hasUpperCase = /[A-Z]/.test(input)
  const hasLowerCase = /[a-z]/.test(input)
  const hasNumber = /[0-9]/.test(input)
  const hasSpecial = /[!@#$%^&*()_+{}\\[\]:;<>,.?~\\/-]/.test(input)
  const isLongerT8 = input.length >= 8

  return {
    hasUpperCase,
    hasLowerCase,
    hasNumber,
    hasSpecial,
    isLongerT8,
  }
}
