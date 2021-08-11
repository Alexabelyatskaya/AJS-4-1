export default function health(status) {
  let result = null;
  if (status.health > 50) {
    result = 'healthy';
  }
  if (status.health <= 50 && status.health > 15) {
    result = 'wounded';
  }
  if (status.health <= 15) {
    result = 'critical';
  }
  return result;
}
