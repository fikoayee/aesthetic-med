import { usePathname, useRouter } from "next/navigation";

interface NavigationItem {
  path: string;
  title: string;
  icon: string;
  iconActive: string;
}

const navigationItems: NavigationItem[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "/assets/icons/dashboard.svg",
    iconActive: "/assets/icons/active/dashboard-active.svg",
  },
  {
    path: "/appointments",
    title: "Appointments",
    icon: "/assets/icons/appointments.svg",
    iconActive: "/assets/icons/active/appointments-active.svg",
  },
  {
    path: "/patients",
    title: "Patients",
    icon: "/assets/icons/patients.svg",
    iconActive: "/assets/icons/active/patients-active.svg",
  },
  {
    path: "/treatments",
    title: "Treatments",
    icon: "/assets/icons/treatments.svg",
    iconActive: "/assets/icons/active/treatments-active.svg",
  },
  {
    path: "/staff",
    title: "Staff List",
    icon: "/assets/icons/staff.svg",
    iconActive: "/assets/icons/active/staff-active.svg",
  },
  {
    path: "/analytics",
    title: "Analytics",
    icon: "/assets/icons/analytics.svg",
    iconActive: "/assets/icons/active/analytics-active.svg",
  },
  {
    path: "/accounts",
    title: "Accounts",
    icon: "/assets/icons/accounts.svg",
    iconActive: "/assets/icons/active/accounts-active.svg",
  },
];

export const useNavigation = () => {
  const router = useRouter();
  const currentPath = usePathname();

  const getNavigation = () => {
    return navigationItems.map((item) => ({
      ...item,
      selected: item.path === currentPath,
    }));
  };

  return {
    navigation: getNavigation(),
    navigate: (path: string) => router.push(path),
  };
};
