import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import MyOrders from './pages/Client\'s Account/MyOrders.jsx';
import MyOrdersActive from './pages/Client\'s Account/MyOrdersActive.jsx';
import MyOrdersDrafts from './pages/Client\'s Account/MyOrdersDrafts.jsx';
import MyOrdersClosed from './pages/Client\'s Account/MyOrdersClosed.jsx';
import Writers from './pages/Client\'s Account/Writers.jsx';
import WritersAll from './pages/Client\'s Account/WritersAll.jsx';
import WritersMy from './pages/Client\'s Account/WritersMy.jsx';
import WritersBlocked from './pages/Client\'s Account/WritersBlocked.jsx';
import Chats from './pages/Client\'s Account/Chats.jsx';
import ChatsActive from './pages/Client\'s Account/ChatsActive.jsx';
import Transactions from './pages/Client\'s Account/Transactions.jsx';
import TransactionsTransactions from './pages/Client\'s Account/TransactionsTransactions.jsx';
import TransactionsRefund from './pages/Client\'s Account/TransactionsRefund.jsx';
import TransactionsPayment from './pages/Client\'s Account/TransactionsPayment.jsx';
import Profile from './pages/Client\'s Account/Profile.jsx';
import ProfileGeneral from './pages/Client\'s Account/ProfileGeneral.jsx';
import ProfileSecurity from './pages/Client\'s Account/ProfileSecurity.jsx';
import ProfileNotifications from './pages/Client\'s Account/ProfileNotifications.jsx';
import Notifications from './pages/Client\'s Account/Notifications.jsx';
// Writer-specific imports
import WriterOrders from './pages/Writer\'s Account/WriterOrders.jsx';
import WriterOrdersInProgress from './pages/Writer\'s Account/WriterOrdersInProgress.jsx';
import WriterOrdersCompleted from './pages/Writer\'s Account/WriterOrdersCompleted.jsx';
import WriterOrdersCanceled from './pages/Writer\'s Account/WriterOrdersCanceled.jsx';
import AvailableOrders from './pages/Writer\'s Account/AvailableOrders.jsx';
import AvailableOrdersAll from './pages/Writer\'s Account/AvailableOrdersAll.jsx';
import AvailableOrdersInvited from './pages/Writer\'s Account/AvailableOrdersInvited.jsx';
import AvailableOrdersHidden from './pages/Writer\'s Account/AvailableOrdersHidden.jsx';
import WriterProposals from './pages/Writer\'s Account/MyProposals.jsx';
import WriterProposalsOpen from './pages/Writer\'s Account/WriterProposalsOpen.jsx';
import WriterProposalsUnconfirmed from './pages/Writer\'s Account/WriterProposalsUnconfirmed.jsx';
import WriterProposalsDeclined from './pages/Writer\'s Account/WriterProposalsDeclined.jsx';
import WriterProposalsCanceled from './pages/Writer\'s Account/WriterProposalsCanceled.jsx';
import WriterChats from './pages/Writer\'s Account/Chats.jsx';
import WriterChatsActive from './pages/Writer\'s Account/ChatsActive.jsx';
import WriterBalance from './pages/Writer\'s Account/Balance.jsx';
import WriterBalanceTransactions from './pages/Writer\'s Account/WriterBalanceTransactions.jsx';
import WriterBalanceWithdrawal from './pages/Writer\'s Account/WriterBalanceWithdrawal.jsx';
import WriterBalancePayment from './pages/Writer\'s Account/WriterBalancePayment.jsx';
// Admin-specific imports (placeholder)
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import { UserContext } from './context/UserContext';
import { UserProvider } from './context/UserContext';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <UserProvider>
      <RoleBasedRouter />
    </UserProvider>
  );
}

function RoleBasedRouter() {
  const { user } = useContext(UserContext);
  const role = user.role || 'client'; // Default to 'client' if undefined

  return (
    <Router>
      <Routes key={role}> {/* Forces remount on role change */}
        <Route element={<DashboardLayout />}>
          {role === 'client' && (
            <>
              <Route path="/" element={<MyOrders />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/my-orders/active" element={<MyOrdersActive />} />
              <Route path="/my-orders/drafts" element={<MyOrdersDrafts />} />
              <Route path="/my-orders/closed" element={<MyOrdersClosed />} />
              <Route path="/writers" element={<Writers />} />
              <Route path="/writers/all" element={<WritersAll />} />
              <Route path="/writers/my" element={<WritersMy />} />
              <Route path="/writers/blocked" element={<WritersBlocked />} />
              <Route path="/chats" element={<Chats />} />
              <Route path="/chats/active" element={<ChatsActive />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/transactions/transactions" element={<TransactionsTransactions />} />
              <Route path="/transactions/refund" element={<TransactionsRefund />} />
              <Route path="/transactions/payment" element={<TransactionsPayment />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/general" element={<ProfileGeneral />} />
              <Route path="/profile/security" element={<ProfileSecurity />} />
              <Route path="/profile/notifications" element={<ProfileNotifications />} />
              <Route path="/notifications" element={<Notifications />} />
            </>
          )}
          {role === 'writer' && (
            <>
              <Route path="/" element={<WriterOrders />} />
              <Route path="/my-orders" element={<WriterOrders />} />
              <Route path="/my-orders/in-progress" element={<WriterOrdersInProgress />} />
              <Route path="/my-orders/completed" element={<WriterOrdersCompleted />} />
              <Route path="/my-orders/canceled" element={<WriterOrdersCanceled />} />
              <Route path="/available-orders" element={<AvailableOrders />} />
              <Route path="/available-orders/all" element={<AvailableOrdersAll />} />
              <Route path="/available-orders/invited" element={<AvailableOrdersInvited />} />
              <Route path="/available-orders/hidden" element={<AvailableOrdersHidden />} />
              <Route path="/my-proposals" element={<WriterProposals />} />
              <Route path="/my-proposals/open" element={<WriterProposalsOpen />} />
              <Route path="/my-proposals/unconfirmed" element={<WriterProposalsUnconfirmed />} />
              <Route path="/my-proposals/declined" element={<WriterProposalsDeclined />} />
              <Route path="/my-proposals/canceled" element={<WriterProposalsCanceled />} />
              <Route path="/chats" element={<WriterChats />} />
              <Route path="/chats/active" element={<WriterChatsActive />} />
              <Route path="/balance" element={<WriterBalance />} />
              <Route path="/balance/transactions" element={<WriterBalanceTransactions />} />
              <Route path="/balance/withdrawal" element={<WriterBalanceWithdrawal />} />
              <Route path="/balance/payment" element={<WriterBalancePayment />} />
              <Route path="/profile" element={<Profile />} /> {/* Shared profile */}
              <Route path="/notifications" element={<Notifications />} />
            </>
          )}
          {role === 'admin' && (
            <>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              {/* Add admin-specific routes as needed */}
            </>
          )}
          <Route path="*" element={<Typography>Invalid role or page not found.</Typography>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;