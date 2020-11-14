import {
  extensionCommands,
  extensionCommandsWithInput,
  extensionExecCommands,
} from '../src/commands'
import {
  resetSeed,
  randomByte,
  randomShort,
  randomInt,
  randomLong,
  randomIntCustomRange,
  randomGuid,
  randomLetters,
  randomDigits,
  randomLettersDigits,
  randomLowercaseLetters,
  randomLowercaseLettersDigits,
  randomUppercaseLetters,
  randomUppercaseLettersDigits,
  randomName,
  randomCity,
  randomCountryCode,
  randomCountryName,
  randomStreetAddress,
  randomPhoneNumber,
  randomEmail,
  randomIP,
  randomIPv6,
  randomUrl,
  randomHexColor,
  randomRgbColor,
  randomSample,
  randomIban,
  randomRegEx,
} from '../src/random'
import { isNumber, isValidIntRange, isStringWithComma, isValidRegEx } from '../src/validations'

describe('>>>>> Extension Commands Tests', () => {
  describe('Simple extension commands', () => {
    it('has the expected number of commands', () => {
      expect(extensionCommands).toHaveLength(18)
    })

    it('has the randomByte command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomByte',
        callback: randomByte,
      })
    })

    it('has the randomShort command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomShort',
        callback: randomShort,
      })
    })

    it('has the randomInt command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomInt', callback: randomInt })
    })

    it('has the randomLong command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomLong',
        callback: randomLong,
      })
    })

    it('has the randomGuid command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomGuid',
        callback: randomGuid,
      })
    })

    it('has the randomName command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomName',
        callback: randomName,
      })
    })

    it('has the randomCity command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomCity',
        callback: randomCity,
      })
    })

    it('has the randomCountryCode command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomCountryCode',
        callback: randomCountryCode,
      })
    })

    it('has the randomCountryName command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomCountryName',
        callback: randomCountryName,
      })
    })

    it('has the randomStreetAddress command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomStreetAddress',
        callback: randomStreetAddress,
      })
    })

    it('has the randomPhoneNumber command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomPhoneNumber',
        callback: randomPhoneNumber,
      })
    })

    it('has the randomEmail command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomEmail',
        callback: randomEmail,
      })
    })

    it('has the randomIP command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomIP', callback: randomIP })
    })

    it('has the randomIPv6 command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomIPv6',
        callback: randomIPv6,
      })
    })

    it('has the randomUrl command in the list', () => {
      expect(extensionCommands).toContainEqual({ key: 'extension.randomUrl', callback: randomUrl })
    })

    it('has the randomHexColor command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomHexColor',
        callback: randomHexColor,
      })
    })

    it('has the randomRgbColor command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomRgbColor',
        callback: randomRgbColor,
      })
    })

    it('has the randomIban command in the list', () => {
      expect(extensionCommands).toContainEqual({
        key: 'extension.randomIban',
        callback: randomIban,
      })
    })
  })

  describe('Extension commands with input', () => {
    it('has the expected number of commands', () => {
      expect(extensionCommandsWithInput).toHaveLength(10)
    })

    it('has the randomLettersCustomLength command in the list', () => {
      expect(extensionCommandsWithInput).toContainEqual({
        key: 'extension.randomLettersCustomLength',
        callback: randomLetters,
        prompt: 'Enter the length of the string',
        validation: isNumber,
        errorMsg: 'The input value must be a number',
      })
    })

    it('has the randomDigitsCustomLength command in the list', () => {
      expect(extensionCommandsWithInput).toContainEqual({
        key: 'extension.randomDigitsCustomLength',
        callback: randomDigits,
        prompt: 'Enter the length of the string',
        validation: isNumber,
        errorMsg: 'The input value must be a number',
      })
    })

    it('has the randomLettersDigitsCustomLength command in the list', () => {
      expect(extensionCommandsWithInput).toContainEqual({
        key: 'extension.randomLettersDigitsCustomLength',
        callback: randomLettersDigits,
        prompt: 'Enter the length of the string',
        validation: isNumber,
        errorMsg: 'The input value must be a number',
      })
    })

    it('has the randomLowercaseLettersCustomLength command in the list', () => {
      expect(extensionCommandsWithInput).toContainEqual({
        key: 'extension.randomLowercaseLettersCustomLength',
        callback: randomLowercaseLetters,
        prompt: 'Enter the length of the string',
        validation: isNumber,
        errorMsg: 'The input value must be a number',
      })
    })

    it('has the randomLowercaseLettersDigitsCustomLength command in the list', () => {
      expect(extensionCommandsWithInput).toContainEqual({
        key: 'extension.randomLowercaseLettersDigitsCustomLength',
        callback: randomLowercaseLettersDigits,
        prompt: 'Enter the length of the string',
        validation: isNumber,
        errorMsg: 'The input value must be a number',
      })
    })

    it('has the randomUppercaseLettersCustomLength command in the list', () => {
      expect(extensionCommandsWithInput).toContainEqual({
        key: 'extension.randomUppercaseLettersCustomLength',
        callback: randomUppercaseLetters,
        prompt: 'Enter the length of the string',
        validation: isNumber,
        errorMsg: 'The input value must be a number',
      })
    })

    it('has the randomUppercaseLettersDigitsCustomLength command in the list', () => {
      expect(extensionCommandsWithInput).toContainEqual({
        key: 'extension.randomUppercaseLettersDigitsCustomLength',
        callback: randomUppercaseLettersDigits,
        prompt: 'Enter the length of the string',
        validation: isNumber,
        errorMsg: 'The input value must be a number',
      })
    })

    it('has the randomIntCustomRange command in the list', () => {
      expect(extensionCommandsWithInput).toContainEqual({
        key: 'extension.randomIntCustomRange',
        callback: randomIntCustomRange,
        prompt: 'Enter the integer range',
        placeHolder: 'MIN-MAX',
        validation: isValidIntRange,
        errorMsg: 'The input value must be a range with a min and max value separated by a hyphen',
      })
    })

    it('has the randomSampleFromInput command in the list', () => {
      expect(extensionCommandsWithInput).toContainEqual({
        key: 'extension.randomSampleFromInput',
        callback: randomSample,
        prompt: 'Enter a comma-separated list of strings',
        validation: isStringWithComma,
        errorMsg: 'The input value must contain at least one comma to separate values',
      })
    })

    it('has the randomRegEx command in the list', () => {
      expect(extensionCommandsWithInput).toContainEqual({
        key: 'extension.randomRegEx',
        callback: randomRegEx,
        prompt: 'Enter the regular expression',
        validation: isValidRegEx,
        errorMsg: 'Invalid regular expression',
      })
    })
  })

  describe('Extension commands with function execution', () => {
    it('has the expected number of commands', () => {
      expect(extensionExecCommands).toHaveLength(1)
    })

    it('has the resetSeed command in the list', () => {
      expect(extensionExecCommands).toContainEqual({
        key: 'extension.resetSeed',
        callback: resetSeed,
        prompt: 'Enter new random seed',
        placeHolder: 'Leave empty to use default options',
        errorMsg: 'Invalid random seed',
        infoMsg: 'Random seed was reset',
      })
    })
  })
})
