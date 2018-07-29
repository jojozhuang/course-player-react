class WBEvent {
  constructor (timestamp, reserved, x, y) {
    this.timestamp = timestamp;
    this.reserved = reserved;
    this.x = x;
    this.y = y;
  }
}

export default WBEvent;