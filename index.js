function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ` + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    var serving = katzDeliLine[0];
    katzDeliLine.shift()
    return "Currently serving " + serving + "."
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
  var line = "The line is currently: "
  for (var i = 0; i < katzDeliLine.length; i++) {
    var name = katzDeliLine[i]
    line += (i + 1) + `. ${name}, `
    }
  }
  return line.slice(0, -2)
}
