// Supabase 데이터를 기존 형식으로 변환하는 매핑 함수
export function mapSupabaseToCanvas(supabaseData) {
  if (!supabaseData) return null;

  return {
    id: supabaseData.id,
    title: supabaseData.title,
    lastModified: supabaseData.last_modified,
    category: supabaseData.category,
    // snake_case를 camelCase로 변환
    problem: supabaseData.problem || { notes: [] },
    customerSegments: supabaseData.customer_segments || { notes: [] },
    valueProposition: supabaseData.value_proposition || { notes: [] },
    solution: supabaseData.solution || { notes: [] },
    unfairAdvantage: supabaseData.unfair_advantage || { notes: [] },
    channels: supabaseData.channels || { notes: [] },
    keyMetrics: supabaseData.key_metrics || { notes: [] },
    costStructure: supabaseData.cost_structure || { notes: [] },
    revenueStreams: supabaseData.revenue_streams || { notes: [] },
    existingAlternatives: supabaseData.existing_alternatives || { notes: [] },
    highLevelConcept: supabaseData.high_level_concept || { notes: [] },
    earlyAdopters: supabaseData.early_adopters || { notes: [] },
  };
}

// 기존 형식을 Supabase 형식으로 변환하는 함수
export function mapCanvasToSupabase(canvasData) {
  if (!canvasData) return null;

  return {
    id: canvasData.id,
    title: canvasData.title,
    last_modified: canvasData.lastModified,
    category: canvasData.category,
    // camelCase를 snake_case로 변환
    problem: canvasData.problem,
    customer_segments: canvasData.customerSegments,
    value_proposition: canvasData.valueProposition,
    solution: canvasData.solution,
    unfair_advantage: canvasData.unfairAdvantage,
    channels: canvasData.channels,
    key_metrics: canvasData.keyMetrics,
    cost_structure: canvasData.costStructure,
    revenue_streams: canvasData.revenueStreams,
    existing_alternatives: canvasData.existingAlternatives,
    high_level_concept: canvasData.highLevelConcept,
    early_adopters: canvasData.earlyAdopters,
  };
}
