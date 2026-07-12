import { useEffect } from 'react';
import { Button } from '../components/Button';
import { 
  Users, 
  Briefcase, 
  Calendar, 
  Activity
} from 'lucide-react';
import { StaggerContainer, StaggerItem } from '../components/Animated';
import { DashboardLayout } from '../components/DashboardLayout';
import { StatCard } from '../components/StatCard';
import { GrowthChart } from '../components/GrowthChart';
import { DepartmentChart } from '../components/DepartmentChart';

function Dashboard() {
  useEffect(() => {
    document.title = "Dashboard | HRMax";
  }, []);

  return (
    <DashboardLayout>
      <StaggerContainer className="max-w-6xl mx-auto space-y-8 pb-12 w-full text-left">
        {/* Header */}
        <StaggerItem className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <h1>Overview</h1>
            <p className="text-foreground opacity-70">Welcome back! Here's what's happening today.</p>
          </div>
          <Button id="generate-report-btn" className="w-auto py-2.5 px-5 text-sm rounded-lg shadow-md hover:-translate-y-0.5">
            Generate Report
          </Button>
        </StaggerItem>

        {/* Stats Grid */}
        <StaggerItem className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total Employees"
            value="1,248"
            trend="+12%"
            trendType="positive"
            icon={<Users className="h-5 w-5" />}
            theme="primary"
          />
          <StatCard 
            title="Open Positions"
            value="42"
            trend="+4%"
            trendType="positive"
            icon={<Briefcase className="h-5 w-5" />}
            theme="accent"
          />
          <StatCard 
            title="Leave Requests"
            value="18"
            trend="-2%"
            trendType="negative"
            icon={<Calendar className="h-5 w-5" />}
            theme="orange"
          />
          <StatCard 
            title="Avg Performance"
            value="94%"
            trend="+8%"
            trendType="positive"
            icon={<Activity className="h-5 w-5" />}
            theme="blue"
          />
        </StaggerItem>

        {/* Charts Section */}
        <StaggerItem className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <GrowthChart />
          </div>
          <div className="lg:col-span-1">
            <DepartmentChart />
          </div>
        </StaggerItem>

        {/* Recent Activity Table */}
        <StaggerItem>
          <div className="rounded-xl border border-border-subtle shadow-sm overflow-hidden bg-white dark:bg-transparent">
            <div className="p-6 border-b border-border-subtle flex justify-between items-center">
              <h4 className="m-0">Recent Hires</h4>
              <button className="text-sm font-medium text-primary hover:text-accent transition-colors cursor-pointer">
                View All
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-surface dark:bg-bg-subtle/50 text-sm border-b border-border-subtle">
                    <th className="px-6 py-4 font-semibold text-heading">Employee</th>
                    <th className="px-6 py-4 font-semibold text-heading">Role</th>
                    <th className="px-6 py-4 font-semibold text-heading">Department</th>
                    <th className="px-6 py-4 font-semibold text-heading">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-subtle text-sm">
                  <tr className="hover:bg-surface/50 dark:hover:bg-bg-subtle/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300 font-medium text-xs">AS</div>
                        <div>
                          <p className="font-medium text-heading">Alex Smith</p>
                          <p className="text-xs text-foreground opacity-70">alex@company.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-foreground">Frontend Developer</td>
                    <td className="px-6 py-4 text-foreground">Engineering</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-300">
                        Onboarding
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface/50 dark:hover:bg-bg-subtle/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-700 dark:text-purple-300 font-medium text-xs">MJ</div>
                        <div>
                          <p className="font-medium text-heading">Maria Johnson</p>
                          <p className="text-xs text-foreground opacity-70">maria@company.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-foreground">Product Designer</td>
                    <td className="px-6 py-4 text-foreground">Design</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300">
                        Active
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-surface/50 dark:hover:bg-bg-subtle/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center text-orange-700 dark:text-orange-300 font-medium text-xs">TC</div>
                        <div>
                          <p className="font-medium text-heading">Tom Chen</p>
                          <p className="text-xs text-foreground opacity-70">tom@company.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-foreground">Marketing Lead</td>
                    <td className="px-6 py-4 text-foreground">Marketing</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-300">
                        Active
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </DashboardLayout>
  );
}

export default Dashboard;
