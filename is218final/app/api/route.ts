

export async function POST(req: Request, res: Response){
    const buffer = await req.arrayBuffer()
    const inputEmail = new TextDecoder('utf-8').decode(buffer)
    
    if (!inputEmail) {
      res = Response.json({ error: 'Email is required' })
      return res;
    }
    const emailJSON = JSON.parse(inputEmail)
    const emailString = emailJSON['input_email']
  
    try {
      const AUDIENCE_ID = process.env.AUDIENCE_ID;
      const API_KEY = process.env.MAILCHIMP_API_KEY;
      const DATACENTER = process.env.MAILCHIMP_API_SERVER;
      const data = {
        email_address: emailString,
        status: 'subscribed',
      };
  
      const response = await fetch(
        `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
        {
          body: JSON.stringify(data),
          headers: {
            Authorization: `apikey ${API_KEY}`,
            'Content-Type': 'application/json',
          },
          method: 'POST',
        }
      );
      console.log(data)
      console.log(response.statusText)
      res = Response.json('Everything went through!')
      return res;
    } catch (error) {
      res = Response.json({ error: 'Something went wrong, not email!' })
      return res;
    }
  };