import { ConnectToDB } from '@/utils/db';

export async function GET(request) {
  try {
    const { db } = await ConnectToDB();
    
    // Find the first whatwedeliver document
    let weDeliverContent = await db.collection('whatwedelivers').findOne();
    
    if (!weDeliverContent) {
      // Return empty structure if no data exists
      return new Response(JSON.stringify({
        title: '',
        subTitle: '',
        cards: [
          {
            heading: '',
            subHeadings: ['']
          },
          {
            heading: '',
            subHeadings: ['']
          },
          {
            heading: '',
            subHeadings: ['']
          }
        ],
        note: ''
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(weDeliverContent), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching whatwedeliver content:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch what we deliver content' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function POST(request) {
  try {
    const { db } = await ConnectToDB();
    const body = await request.json();

    // Validate required fields
    const { title, subTitle, cards, note } = body;
    
    if (!title || !subTitle || !cards || !note) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate cards structure
    if (!Array.isArray(cards) || cards.length !== 3) {
      return new Response(JSON.stringify({ error: 'Cards must be an array of exactly 3 items' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    for (let i = 0; i < cards.length; i++) {
      if (!cards[i].heading || !cards[i].subHeadings || !Array.isArray(cards[i].subHeadings)) {
        return new Response(JSON.stringify({ error: `Card ${i + 1} must have heading and subHeadings array` }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      
      // Ensure at least one subheading exists
      if (cards[i].subHeadings.length === 0) {
        return new Response(JSON.stringify({ error: `Card ${i + 1} must have at least one subheading` }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Create new whatwedeliver document
    const newWeDeliver = {
      title,
      subTitle,
      cards,
      note,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection('whatwedelivers').insertOne(newWeDeliver);
    
    return new Response(JSON.stringify({ 
      message: 'What We Deliver content created successfully',
      id: result.insertedId 
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating whatwedeliver content:', error);
    return new Response(JSON.stringify({ error: 'Failed to create what we deliver content' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(request) {
  try {
    const { db } = await ConnectToDB();
    const body = await request.json();

    // Validate required fields
    const { title, subTitle, cards, note } = body;
    
    if (!title || !subTitle || !cards || !note) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Validate cards structure
    if (!Array.isArray(cards) || cards.length !== 3) {
      return new Response(JSON.stringify({ error: 'Cards must be an array of exactly 3 items' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    for (let i = 0; i < cards.length; i++) {
      if (!cards[i].heading || !cards[i].subHeadings || !Array.isArray(cards[i].subHeadings)) {
        return new Response(JSON.stringify({ error: `Card ${i + 1} must have heading and subHeadings array` }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      
      // Ensure at least one subheading exists
      if (cards[i].subHeadings.length === 0) {
        return new Response(JSON.stringify({ error: `Card ${i + 1} must have at least one subheading` }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }

    // Update the first whatwedeliver document (or create if none exists)
    const updateData = {
      title,
      subTitle,
      cards,
      note,
      updatedAt: new Date()
    };

    const result = await db.collection('whatwedelivers').updateOne(
      {}, // match any document
      { $set: updateData },
      { upsert: true } // create if doesn't exist
    );
    
    return new Response(JSON.stringify({ 
      message: 'What We Deliver content updated successfully',
      modifiedCount: result.modifiedCount,
      upsertedId: result.upsertedId
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating whatwedeliver content:', error);
    return new Response(JSON.stringify({ error: 'Failed to update what we deliver content' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
