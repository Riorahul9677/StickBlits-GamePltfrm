const sampleLeaders = [
  { rank: 1, name: 'PlayerOne', score: 15420 },
  { rank: 2, name: 'NeonRacer', score: 14800 },
  { rank: 3, name: 'ShadowFist', score: 13950 },
  { rank: 4, name: 'DriftKing', score: 12800 }
];

const Leaderboards = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-12">
        <h1 className="text-3xl font-bold mb-6">Leaderboards</h1>
        <div className="bg-card p-4 rounded-lg">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-2">Rank</th>
                <th className="pb-2">Player</th>
                <th className="pb-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {sampleLeaders.map((l) => (
                <tr key={l.rank} className="border-t">
                  <td className="py-2 align-top">{l.rank}</td>
                  <td className="py-2">{l.name}</td>
                  <td className="py-2">{l.score.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboards;


