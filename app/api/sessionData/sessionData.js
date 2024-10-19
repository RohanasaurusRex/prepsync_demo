import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    // Save the user's progress to the session or database
    const { stage } = req.body;
    
    // Here we simulate storing the progress in the session object
    // In real apps, you might want to persist this to a database
    session.progress = { stage };

    // You can also return the updated session if needed
    res.status(200).json({ message: 'Progress saved', stage });
  } else {
    // Fetch the progress (if any)
    res.status(200).json({ progress: session.progress || { stage: 1 } });
  }
}