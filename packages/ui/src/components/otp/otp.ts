import { OtpRoot } from "./otpRoot";
import { OtpInputs } from "./otpInputs";
import { OtpHiddenInput } from "./otpHiddenInput";

export const Otp = Object.assign(OtpRoot, {
  Inputs: OtpInputs,
  HiddenInput: OtpHiddenInput
});