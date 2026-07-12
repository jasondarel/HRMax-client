import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: 'Jan', employees: 800 },
  { name: 'Feb', employees: 820 },
  { name: 'Mar', employees: 850 },
  { name: 'Apr', employees: 890 },
  { name: 'May', employees: 940 },
  { name: 'Jun', employees: 980 },
  { name: 'Jul', employees: 1020 },
  { name: 'Aug', employees: 1100 },
  { name: 'Sep', employees: 1150 },
  { name: 'Oct', employees: 1190 },
  { name: 'Nov', employees: 1210 },
  { name: 'Dec', employees: 1248 },
];

export function GrowthChart() {
  return (
    <div className="rounded-xl border border-border-subtle shadow-sm bg-white dark:bg-slate-900 p-6 flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold m-0">Employee Growth</h3>
        <p className="text-sm text-foreground opacity-70">Total headcount over the last 12 months</p>
      </div>
      <div className="flex-1 min-h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorEmployees" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border-subtle)" opacity={0.5} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--text)', opacity: 0.5, fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'var(--text)', opacity: 0.5, fontSize: 12 }}
            />
            <Tooltip 
              content={({ active, payload, label }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white dark:bg-slate-800 border border-border-subtle p-3 rounded-lg shadow-md">
                      <p className="text-sm font-medium text-foreground opacity-70 mb-1">{label}</p>
                      <p className="text-sm font-bold text-primary">
                        {payload[0].value} employees
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area 
              type="monotone" 
              dataKey="employees" 
              stroke="var(--color-primary)" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorEmployees)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
