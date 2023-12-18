

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
      const AUDIENCE_ID = "4fcff409b4";
      const API_KEY ="788015d30aca46e23d38da4f3404aa1e-us21";
      const DATACENTER = "us21";
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
      res = Response.json('Everything went through!')
      return res;
    } catch (error) {
      res = Response.json({ error: 'Something went wrong, not email!' })
      return res;
    }
  };