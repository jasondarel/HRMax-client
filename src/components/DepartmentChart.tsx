import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip,
  Legend
} from 'recharts';

const data = [
  { name: 'Engineering', value: 450, color: 'var(--color-primary)' },
  { name: 'Sales', value: 380, color: 'var(--color-accent)' },
  { name: 'Marketing', value: 220, color: '#f97316' }, // orange-500
  { name: 'HR & Admin', value: 198, color: '#3b82f6' }, // blue-500
];

export function DepartmentChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="rounded-xl border border-border-subtle shadow-sm bg-white dark:bg-slate-900 p-6 flex flex-col h-full">
      <div className="mb-2">
        <h3 className="text-lg font-semibold m-0">Departments</h3>
        <p className="text-sm text-foreground opacity-70">Headcount distribution</p>
      </div>
      <div className="flex-1 min-h-[300px] w-full relative flex items-center justify-center">
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-4">
          <span className="text-3xl font-bold">{total.toLocaleString()}</span>
          <span className="text-xs text-foreground opacity-60">Total Staff</span>
        </div>
        
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={110}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0];
                  return (
                    <div className="bg-white dark:bg-slate-800 border border-border-subtle p-3 rounded-lg shadow-md flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: data.payload.color }}></div>
                      <p className="text-sm font-medium text-foreground m-0">
                        {data.name}: <span className="font-bold">{data.value} employees</span>
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="circle"
              formatter={(value) => <span className="text-sm text-foreground opacity-80">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
