export default function MessengerConnect({ company }) {
  return (
    <div className="mb-6 bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Connect your Facebook Page</h2>
      <ol className="list-decimal list-inside mb-2">
        <li>Go to Facebook for Developers and create an App (type: Business).</li>
        <li>Add Messenger product and configure Webhook:</li>
        <li>
          <b>Callback URL:</b> <code>{process.env.NEXT_PUBLIC_API_URL}/webhook/messenger/{company.id}</code><br/>
          <b>Verify Token:</b> <code>{process.env.NEXT_PUBLIC_FACEBOOK_VERIFY_TOKEN || 'see .env'}</code>
        </li>
        <li>Subscribe your Facebook Page to events.</li>
      </ol>
      {/* Optional: show connected accounts */}
      {company.messengerAccounts && company.messengerAccounts.length > 0 &&
        <div>
          <div className="font-bold mb-1">Connected Pages:</div>
          <ul>
            {company.messengerAccounts.map((acc: any) => (
              <li key={acc.id}>
                Page ID: {acc.pageId}
                {/* Add disconnect button if you want */}
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}
