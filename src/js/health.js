export default function health(status) {
	if (status.health > 50) {
		return 'healthy';
	}
	if (50 >= status.health && status.health > 15) {
		return 'wounded';
	}
	if (status.health <= 15) {
		return 'critical';
	}
}