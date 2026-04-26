import { ConnectToDB } from '@/utils/db';

export async function GET(request) {
  try {
    const { db } = await ConnectToDB();
    
    // Find the first landing document
    let landingContent = await db.collection('landings').findOne();
    
    if (!landingContent) {
      // Return empty structure if no data exists
      return new Response(JSON.stringify({
        title: '',
        subTitle: '',
        buttonOne: '',
        buttonTwo: ''
      }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(landingContent), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching landing content:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch landing content' }), {
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
    const { title, subTitle, buttonOne, buttonTwo } = body;
    
    if (!title || !subTitle || !buttonOne || !buttonTwo) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Create new landing document
    const newLanding = {
      title,
      subTitle,
      buttonOne: {
        text: buttonOne,
        link: '#'
      },
      buttonTwo: {
        text: buttonTwo,
        link: '#'
      },
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection('landings').insertOne(newLanding);
    
    return new Response(JSON.stringify({ 
      message: 'Landing content created successfully',
      id: result.insertedId 
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating landing content:', error);
    return new Response(JSON.stringify({ error: 'Failed to create landing content' }), {
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
    const { title, subTitle, buttonOne, buttonTwo } = body;
    
    if (!title || !subTitle || !buttonOne || !buttonTwo) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Update the first landing document (or create if none exists)
    const updateData = {
      title,
      subTitle,
      buttonOne: {
        text: buttonOne,
        link: '#'
      },
      buttonTwo: {
        text: buttonTwo,
        link: '#'
      },
      updatedAt: new Date()
    };

    const result = await db.collection('landings').updateOne(
      {}, // match any document
      { $set: updateData },
      { upsert: true } // create if doesn't exist
    );
    
    return new Response(JSON.stringify({ 
      message: 'Landing content updated successfully',
      modifiedCount: result.modifiedCount,
      upsertedId: result.upsertedId
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating landing content:', error);
    return new Response(JSON.stringify({ error: 'Failed to update landing content' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
