const defaultRubyCode = `# RGB LED Blinking and Sound Example
$ON_JINGLE = "jingle_on"
$OFF_JINGLE = "jingle_off"
$LED_OFF = [0, 0, 0]
$LED_RED = [15, 0, 0]
$LED_GREEN = [0, 15, 0]
$LED_BLUE = [0, 0, 15]
$LED_MAGENTA = [15, 0, 15]
$LED_CYAN = [0, 15, 15]
$LED_YELLOW = [15, 15, 0]

while true do
  Sound.play(mml: $ON_JINGLE)
  LED.set(part: :right, color: $LED_RED)
  sleep 1
  LED.set(part: :right, color: $LED_GREEN)
  sleep 1
  LED.set(part: :right, color: $LED_BLUE)
  sleep 1
  
  break if Power.req_reload?
end
`;

var editor = CodeMirror.fromTextArea(document.getElementById("ruby-code"), {
  mode: "ruby",
  theme: "dracula",
  lineNumbers: true,
  matchBrackets: true,
  autoCloseBrackets: true,
});

editor.getDoc().setValue(defaultRubyCode);
