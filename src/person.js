const hls = {
  critical: [0, 15],
  wounded: [16, 50],
  healthy: [51, 100],
};

export default function personHealth(prs) {
  return Object.keys(hls).find((hl) => (prs.health >= hls[hl][0] && prs.health <= hls[hl][1]));
}
