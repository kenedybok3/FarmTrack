(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://hnylgsfxcmngjocaflah.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhueWxnc2Z4Y21uZ2pvY2FmbGFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNDAxMjQsImV4cCI6MjA5MDcxNjEyNH0.lgC2DMAaxmfW5gRvvvhpC0kfrGRmKTAlCc0LG-330Og");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/farmers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createFarmer",
    ()=>createFarmer,
    "getAllFarmers",
    ()=>getAllFarmers,
    "getFarmerByEmail",
    ()=>getFarmerByEmail,
    "getFarmerById",
    ()=>getFarmerById,
    "getFarmerByPhone",
    ()=>getFarmerByPhone,
    "updateFarmer",
    ()=>updateFarmer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function createFarmer(farmerData) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('farmers').insert([
        farmerData
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getFarmerByPhone(phone) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('farmers').select('*').eq('phone', phone).single();
    if (error && error.code !== 'PGRST116') throw error;
    return data;
}
async function getFarmerByEmail(email) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('farmers').select('*').eq('email', email).single();
    if (error && error.code !== 'PGRST116') throw error;
    return data;
}
async function getFarmerById(id) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('farmers').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
}
async function updateFarmer(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('farmers').update({
        ...updates,
        updated_at: new Date().toISOString()
    }).eq('id', id).select().single();
    if (error) throw error;
    return data;
}
async function getAllFarmers() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('farmers').select('*');
    if (error) throw error;
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useAuth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/farmers.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useAuth() {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        user: null,
        loading: true,
        error: null
    });
    const checkSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAuth.useCallback[checkSession]": async ()=>{
            try {
                const { data: { session }, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getSession();
                if (error) {
                    console.error('checkSession session check failed:', error);
                }
                if (session?.user?.email) {
                    let farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFarmerByEmail"])(session.user.email);
                    if (!farmer) {
                        farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFarmer"])({
                            email: session.user.email,
                            phone: '+2340000000000',
                            name: 'User',
                            farm_type: 'Poultry'
                        });
                    }
                    if (farmer?.id) {
                        localStorage.setItem('farmer_id', farmer.id);
                    }
                    setState({
                        user: farmer,
                        loading: false,
                        error: null
                    });
                    return;
                }
                const storedFarmerId = localStorage.getItem('farmer_id');
                if (storedFarmerId) {
                    const farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFarmerById"])(storedFarmerId);
                    if (farmer) {
                        setState({
                            user: farmer,
                            loading: false,
                            error: null
                        });
                        return;
                    }
                }
                setState({
                    user: null,
                    loading: false,
                    error: null
                });
            } catch (err) {
                console.error('checkSession error:', err);
                const storedFarmerId = localStorage.getItem('farmer_id');
                if (storedFarmerId) {
                    const farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFarmerById"])(storedFarmerId);
                    if (farmer) {
                        setState({
                            user: farmer,
                            loading: false,
                            error: null
                        });
                        return;
                    }
                }
                setState({
                    user: null,
                    loading: false,
                    error: null
                });
            }
        }
    }["useAuth.useCallback[checkSession]"], []);
    // useEffect(() => {
    //   checkSession()
    //   const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
    //     if (event === 'SIGNED_IN') {
    //       await checkSession()
    //     } else if (event === 'SIGNED_OUT') {
    //       setState({ user: null, loading: false, error: null })
    //       localStorage.removeItem('farmer_id')
    //     }
    //   })
    //   return () => subscription.unsubscribe()
    // }, [checkSession])
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAuth.useEffect": ()=>{
            checkSession();
            const { data: { subscription } } = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.onAuthStateChange({
                "useAuth.useEffect": async (event, session)=>{
                    if (event === "SIGNED_IN") {
                        await checkSession();
                    } else if (event === "SIGNED_OUT") {
                        localStorage.removeItem("farmer_id");
                        setState({
                            user: null,
                            loading: false,
                            error: null
                        });
                    }
                }
            }["useAuth.useEffect"]);
            return ({
                "useAuth.useEffect": ()=>subscription.unsubscribe()
            })["useAuth.useEffect"];
        }
    }["useAuth.useEffect"], [
        checkSession
    ]);
    const completeLogin = async (farmer)=>{
        try {
            if (!farmer?.id) {
                throw new Error('Invalid farmer data received from login');
            }
            localStorage.setItem('farmer_id', farmer.id);
            setState((prev)=>({
                    ...prev,
                    user: farmer,
                    loading: false,
                    error: null
                }));
            return {
                success: true
            };
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unexpected login error';
            console.error('Login completion failed:', error);
            setState((prev)=>({
                    ...prev,
                    user: null,
                    loading: false,
                    error: message
                }));
            return {
                success: false,
                error: message
            };
        }
    };
    const login = async (email, password)=>{
        setState((prev)=>({
                ...prev,
                error: null,
                loading: true
            }));
        try {
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                email,
                password
            });
            if (error) {
                console.error('Auth signIn error:', error);
                throw error;
            }
            console.log('Auth success, user:', data?.user);
            let farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFarmerByEmail"])(email);
            console.log('Farmer by email:', farmer);
            if (!farmer) {
                farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFarmer"])({
                    email: email,
                    phone: '+2340000000000',
                    name: 'User',
                    farm_type: 'Poultry'
                });
            }
            return await completeLogin(farmer);
        } catch (err) {
            console.error('Login error:', err);
            const message = err instanceof Error ? err.message : 'Login failed';
            setState((prev)=>({
                    ...prev,
                    loading: false,
                    error: message
                }));
            return {
                success: false,
                error: message
            };
        }
    };
    const completeRegistration = async (farmer)=>{
        try {
            if (!farmer?.id) {
                throw new Error('Invalid farmer data received from registration');
            }
            localStorage.setItem('farmer_id', farmer.id);
            setState((prev)=>({
                    ...prev,
                    user: farmer,
                    loading: false,
                    error: null
                }));
            return {
                success: true
            };
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unexpected registration error';
            console.error('Registration completion failed:', error);
            setState((prev)=>({
                    ...prev,
                    user: null,
                    loading: false,
                    error: message
                }));
            return {
                success: false,
                error: message
            };
        }
    };
    const register = async (email, name, phone, password, farmType = 'Poultry')=>{
        setState((prev)=>({
                ...prev,
                error: null,
                loading: true
            }));
        try {
            const { error: authError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signUp({
                email,
                password
            });
            if (authError) {
                if (authError.message?.includes('User already registered') || authError.code === 'user_already_exists') {
                    const { error: signInError } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signInWithPassword({
                        email,
                        password
                    });
                    if (signInError) {
                        throw new Error('Account exists. Please try logging in or reset your password.');
                    }
                } else {
                    console.error('Auth signup error:', authError);
                    throw authError;
                }
            }
            const farmer = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$farmers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createFarmer"])({
                email: email,
                phone: phone,
                name,
                full_name: name,
                farm_type: farmType
            });
            return await completeRegistration(farmer);
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Registration failed';
            setState((prev)=>({
                    ...prev,
                    loading: false,
                    error: message
                }));
            return {
                success: false,
                error: message
            };
        }
    };
    const logout = async ()=>{
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.signOut();
            localStorage.removeItem('farmer_id');
            setState({
                user: null,
                loading: false,
                error: null
            });
        } catch (err) {
            console.error('Logout error:', err);
        }
    };
    const getStoredFarmerId = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return localStorage.getItem('farmer_id');
    };
    return {
        user: state.user,
        loading: state.loading,
        error: state.error,
        login,
        register,
        logout,
        getStoredFarmerId,
        checkSession
    };
}
_s(useAuth, "11JEDJm16Ef/PNgorY/LYiZSHm4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/daily-records.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createDailyRecord",
    ()=>createDailyRecord,
    "deleteDailyRecord",
    ()=>deleteDailyRecord,
    "getDailyRecords",
    ()=>getDailyRecords,
    "getFarmStats",
    ()=>getFarmStats,
    "getLatestDailyRecord",
    ()=>getLatestDailyRecord,
    "getRecordsByDateRange",
    ()=>getRecordsByDateRange,
    "updateDailyRecord",
    ()=>updateDailyRecord
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function createDailyRecord(record) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('daily_records').insert([
        record
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getDailyRecords(farmerId, limit = 30) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('daily_records').select('*').eq('farmer_id', farmerId).order('record_date', {
        ascending: false
    }).limit(limit);
    if (error) throw error;
    return data;
}
async function getLatestDailyRecord(farmerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('daily_records').select('*').eq('farmer_id', farmerId).order('created_at', {
        ascending: false
    }).limit(1).single();
    if (error && error.code !== 'PGRST116') throw error;
    return data;
}
async function updateDailyRecord(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('daily_records').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return data;
}
async function deleteDailyRecord(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('daily_records').delete().eq('id', id);
    if (error) throw error;
}
async function getFarmStats(farmerId) {
    const records = await getDailyRecords(farmerId, 100);
    const totalSales = records.reduce((sum, r)=>sum + (r.sales_amount || 0), 0);
    const totalMortality = records.reduce((sum, r)=>sum + (r.mortality_count || 0), 0);
    const totalProduction = records.reduce((sum, r)=>sum + (r.production_amt || 0), 0);
    const totalFeedCost = records.reduce((sum, r)=>sum + (r.feed_cost || 0), 0);
    return {
        totalSales,
        totalMortality,
        avgProduction: records.length > 0 ? totalProduction / records.length : 0,
        totalFeedCost
    };
}
async function getRecordsByDateRange(farmerId, startDate, endDate) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('daily_records').select('*').eq('farmer_id', farmerId).gte('record_date', startDate).lte('record_date', endDate).order('record_date', {
        ascending: true
    });
    if (error) throw error;
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/health-logs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHealthLog",
    ()=>createHealthLog,
    "deleteHealthLog",
    ()=>deleteHealthLog,
    "getHealthLogs",
    ()=>getHealthLogs,
    "updateHealthLog",
    ()=>updateHealthLog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function createHealthLog(log) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_logs').insert([
        log
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getHealthLogs(farmerId, limit = 50) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_logs').select('*').eq('farmer_id', farmerId).order('record_date', {
        ascending: false
    }).limit(limit);
    if (error) throw error;
    return data;
}
async function updateHealthLog(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_logs').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return data;
}
async function deleteHealthLog(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('health_logs').delete().eq('id', id);
    if (error) throw error;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/expenses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createExpense",
    ()=>createExpense,
    "deleteExpense",
    ()=>deleteExpense,
    "getExpenses",
    ()=>getExpenses,
    "getExpensesByCategory",
    ()=>getExpensesByCategory,
    "getTotalExpenses",
    ()=>getTotalExpenses,
    "updateExpense",
    ()=>updateExpense
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function createExpense(expense) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').insert([
        expense
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getExpenses(farmerId, limit = 50) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').select('*').eq('farmer_id', farmerId).order('expense_date', {
        ascending: false
    }).limit(limit);
    if (error) throw error;
    return data;
}
async function updateExpense(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return data;
}
async function deleteExpense(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').delete().eq('id', id);
    if (error) throw error;
}
async function getExpensesByCategory(farmerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').select('category, amount').eq('farmer_id', farmerId);
    if (error) throw error;
    const categoryTotals = {};
    data.forEach((exp)=>{
        categoryTotals[exp.category] = (categoryTotals[exp.category] || 0) + exp.amount;
    });
    return categoryTotals;
}
async function getTotalExpenses(farmerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('expenses').select('amount').eq('farmer_id', farmerId);
    if (error) throw error;
    return data.reduce((sum, exp)=>sum + exp.amount, 0);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/batches.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBatch",
    ()=>createBatch,
    "deleteBatch",
    ()=>deleteBatch,
    "getBatchById",
    ()=>getBatchById,
    "getBatches",
    ()=>getBatches,
    "updateBatch",
    ()=>updateBatch,
    "updateBatchCount",
    ()=>updateBatchCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function createBatch(batch) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('batches').insert([
        {
            ...batch,
            current_count: batch.initial_count
        }
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getBatches(farmerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('batches').select('*').eq('farmer_id', farmerId).order('acquired_date', {
        ascending: false
    });
    if (error) throw error;
    return data;
}
async function getBatchById(id) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('batches').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
}
async function updateBatch(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('batches').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return data;
}
async function deleteBatch(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('batches').delete().eq('id', id);
    if (error) throw error;
}
async function updateBatchCount(id, newCount) {
    return updateBatch(id, {
        current_count: newCount
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/inventory.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createInventoryItem",
    ()=>createInventoryItem,
    "deleteInventoryItem",
    ()=>deleteInventoryItem,
    "getInventory",
    ()=>getInventory,
    "getInventoryItem",
    ()=>getInventoryItem,
    "getLowStockItems",
    ()=>getLowStockItems,
    "updateInventoryItem",
    ()=>updateInventoryItem,
    "updateInventoryQuantity",
    ()=>updateInventoryQuantity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function createInventoryItem(item) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('inventory').insert([
        item
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getInventory(farmerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('inventory').select('*').eq('farmer_id', farmerId).order('item_name', {
        ascending: true
    });
    if (error) throw error;
    return data;
}
async function getInventoryItem(id) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('inventory').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
}
async function updateInventoryItem(id, updates) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('inventory').update(updates).eq('id', id).select().single();
    if (error) throw error;
    return data;
}
async function deleteInventoryItem(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('inventory').delete().eq('id', id);
    if (error) throw error;
}
async function getLowStockItems(farmerId) {
    const inventory = await getInventory(farmerId);
    return inventory.filter((item)=>item.reorder_level && item.quantity <= item.reorder_level);
}
async function updateInventoryQuantity(id, quantity) {
    return updateInventoryItem(id, {
        quantity
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useFarmData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFarmData",
    ()=>useFarmData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/daily-records.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$health$2d$logs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/health-logs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/expenses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/batches.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/inventory.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function useFarmData(farmerId) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        records: [],
        healthLogs: [],
        expenses: [],
        batches: [],
        inventory: [],
        stats: null,
        totalExpenses: 0,
        loading: false,
        error: null
    });
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useFarmData.useCallback[refresh]": async ()=>{
            if (!farmerId) return;
            setState({
                "useFarmData.useCallback[refresh]": (prev)=>({
                        ...prev,
                        loading: true,
                        error: null
                    })
            }["useFarmData.useCallback[refresh]"]);
            try {
                const [records, healthLogs, expenses, batches, inventory, stats, totalExpenses] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDailyRecords"])(farmerId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$health$2d$logs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHealthLogs"])(farmerId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpenses"])(farmerId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBatches"])(farmerId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInventory"])(farmerId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFarmStats"])(farmerId),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalExpenses"])(farmerId)
                ]);
                setState({
                    records,
                    healthLogs,
                    expenses,
                    batches,
                    inventory,
                    stats,
                    totalExpenses,
                    loading: false,
                    error: null
                });
            } catch (err) {
                const message = err instanceof Error ? err.message : 'Failed to fetch farm data';
                setState({
                    "useFarmData.useCallback[refresh]": (prev)=>({
                            ...prev,
                            loading: false,
                            error: message
                        })
                }["useFarmData.useCallback[refresh]"]);
            }
        }
    }["useFarmData.useCallback[refresh]"], [
        farmerId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFarmData.useEffect": ()=>{
            if (!farmerId) return;
            let cancelled = false;
            const loadData = {
                "useFarmData.useEffect.loadData": async ()=>{
                    setState({
                        "useFarmData.useEffect.loadData": (prev)=>({
                                ...prev,
                                loading: true,
                                error: null
                            })
                    }["useFarmData.useEffect.loadData"]);
                    try {
                        const [records, healthLogs, expenses, batches, inventory, stats, totalExpenses] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDailyRecords"])(farmerId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$health$2d$logs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHealthLogs"])(farmerId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExpenses"])(farmerId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBatches"])(farmerId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInventory"])(farmerId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFarmStats"])(farmerId),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTotalExpenses"])(farmerId)
                        ]);
                        if (!cancelled) {
                            setState({
                                records,
                                healthLogs,
                                expenses,
                                batches,
                                inventory,
                                stats,
                                totalExpenses,
                                loading: false,
                                error: null
                            });
                        }
                    } catch (err) {
                        if (!cancelled) {
                            const message = err instanceof Error ? err.message : 'Failed to fetch farm data';
                            setState({
                                "useFarmData.useEffect.loadData": (prev)=>({
                                        ...prev,
                                        loading: false,
                                        error: message
                                    })
                            }["useFarmData.useEffect.loadData"]);
                        }
                    }
                }
            }["useFarmData.useEffect.loadData"];
            loadData();
            return ({
                "useFarmData.useEffect": ()=>{
                    cancelled = true;
                }
            })["useFarmData.useEffect"];
        }
    }["useFarmData.useEffect"], [
        farmerId
    ]);
    const addRecord = async (record)=>{
        if (!farmerId) return {
            success: false,
            error: 'No farmer ID'
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDailyRecord"])({
                ...record,
                farmer_id: farmerId
            });
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const removeRecord = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteDailyRecord"])(id);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const addHealthLog = async (log)=>{
        if (!farmerId) return {
            success: false,
            error: 'No farmer ID'
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$health$2d$logs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHealthLog"])({
                ...log,
                farmer_id: farmerId
            });
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const removeHealthLog = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$health$2d$logs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteHealthLog"])(id);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const addExpense = async (expense)=>{
        if (!farmerId) return {
            success: false,
            error: 'No farmer ID'
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createExpense"])({
                ...expense,
                farmer_id: farmerId
            });
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const removeExpense = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$expenses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteExpense"])(id);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const addBatch = async (batch)=>{
        if (!farmerId) return {
            success: false,
            error: 'No farmer ID'
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBatch"])({
                ...batch,
                farmer_id: farmerId
            });
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const updateBatch = async (id, newCount)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateBatchCount"])(id, newCount);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const removeBatch = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$batches$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteBatch"])(id);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const addInventoryItem = async (item)=>{
        if (!farmerId) return {
            success: false,
            error: 'No farmer ID'
        };
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInventoryItem"])({
                ...item,
                farmer_id: farmerId
            });
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const updateInventory = async (id, quantity)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateInventoryQuantity"])(id, quantity);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    const removeInventoryItem = async (id)=>{
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$inventory$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteInventoryItem"])(id);
            await refresh();
            return {
                success: true
            };
        } catch (err) {
            const message = err instanceof Error ? err.message : 'Failed to save record';
            return {
                success: false,
                error: message
            };
        }
    };
    return {
        ...state,
        refresh,
        addRecord,
        removeRecord,
        addHealthLog,
        removeHealthLog,
        addExpense,
        removeExpense,
        addBatch,
        updateBatch,
        removeBatch,
        addInventoryItem,
        updateInventory,
        removeInventoryItem
    };
}
_s(useFarmData, "EcgSqiqr0kos3ceFfx1a84d8znU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/api/alerts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAlert",
    ()=>createAlert,
    "deleteAlert",
    ()=>deleteAlert,
    "getAlerts",
    ()=>getAlerts,
    "getUnreadAlertCount",
    ()=>getUnreadAlertCount,
    "getUnreadAlerts",
    ()=>getUnreadAlerts,
    "markAlertAsRead",
    ()=>markAlertAsRead,
    "markAllAlertsAsRead",
    ()=>markAllAlertsAsRead
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/supabase.ts [app-client] (ecmascript)");
;
async function createAlert(alert) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('ai_alerts').insert([
        alert
    ]).select().single();
    if (error) throw error;
    return data;
}
async function getAlerts(farmerId, limit = 20) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('ai_alerts').select('*').eq('farmer_id', farmerId).order('created_at', {
        ascending: false
    }).limit(limit);
    if (error) throw error;
    return data;
}
async function getUnreadAlerts(farmerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('ai_alerts').select('*').eq('farmer_id', farmerId).eq('is_read', false).order('created_at', {
        ascending: false
    });
    if (error) throw error;
    return data;
}
async function getUnreadAlertCount(farmerId) {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('ai_alerts').select('id', {
        count: 'exact'
    }).eq('farmer_id', farmerId).eq('is_read', false);
    if (error) throw error;
    return data?.length || 0;
}
async function markAlertAsRead(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('ai_alerts').update({
        is_read: true
    }).eq('id', id);
    if (error) throw error;
}
async function markAllAlertsAsRead(farmerId) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('ai_alerts').update({
        is_read: true
    }).eq('farmer_id', farmerId).eq('is_read', false);
    if (error) throw error;
}
async function deleteAlert(id) {
    const { error } = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from('ai_alerts').delete().eq('id', id);
    if (error) throw error;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useAI.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAI",
    ()=>useAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/alerts.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/daily-records.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$health$2d$logs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api/health-logs.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](("TURBOPACK compile-time value", "AIzaSyAtqxUIOUOVWadFqEgxx37mvV81gQUvykI") || '');
function formatRecordsForAI(records) {
    if (records.length === 0) return 'No historical data available yet.';
    return records.slice(0, 10).map((record)=>`Date: ${record.record_date}, Feed: ${record.feed_bags_used} bags (₦${record.feed_cost}), Loss: ${record.mortality_count}, Eggs: ${record.production_amt}, Sales: ₦${record.sales_amount}`).join('\n');
}
function analyzeTrends(records) {
    const alerts = [];
    if (records.length < 3) return alerts;
    const recent = records.slice(0, 3);
    const previous = records.slice(3, 6);
    if (previous.length === 0) return alerts;
    const avgMortalityRecent = recent.reduce((sum, r)=>sum + r.mortality_count, 0) / recent.length;
    const avgMortalityPrevious = previous.reduce((sum, r)=>sum + r.mortality_count, 0) / previous.length;
    if (avgMortalityRecent > avgMortalityPrevious * 2 && avgMortalityRecent > 2) {
        alerts.push({
            farmer_id: records[0].farmer_id,
            alert_type: 'mortality',
            title: '⚠️ Mortality Spike Detected',
            message: `Mortality has increased from average ${avgMortalityPrevious.toFixed(1)} to ${avgMortalityRecent.toFixed(1)} birds. Consider checking for disease or environmental issues.`,
            severity: 'critical'
        });
    }
    const avgProductionRecent = recent.reduce((sum, r)=>sum + r.production_amt, 0) / recent.length;
    const avgProductionPrevious = previous.reduce((sum, r)=>sum + r.production_amt, 0) / previous.length;
    if (avgProductionPrevious > 0 && avgProductionRecent < avgProductionPrevious * 0.8) {
        alerts.push({
            farmer_id: records[0].farmer_id,
            alert_type: 'production',
            title: '📉 Production Drop Alert',
            message: `Egg production has dropped by ${((1 - avgProductionRecent / avgProductionPrevious) * 100).toFixed(0)}%. Check feed quality and lighting conditions.`,
            severity: 'warning'
        });
    }
    const avgFeedCostRecent = recent.reduce((sum, r)=>sum + r.feed_cost, 0) / recent.length;
    if (avgFeedCostRecent > 50000) {
        alerts.push({
            farmer_id: records[0].farmer_id,
            alert_type: 'feed_cost',
            title: '💰 High Feed Costs',
            message: `Average daily feed cost is ₦${avgFeedCostRecent.toFixed(0)}. Consider bulk purchasing or exploring alternative suppliers.`,
            severity: 'info'
        });
    }
    const lastRecordDate = new Date(records[0].record_date);
    const daysSinceLastRecord = Math.floor((Date.now() - lastRecordDate.getTime()) / (1000 * 60 * 60 * 24));
    if (daysSinceLastRecord >= 3) {
        alerts.push({
            farmer_id: records[0].farmer_id,
            alert_type: 'general',
            title: '📝 Missing Daily Records',
            message: `You haven't logged any records for ${daysSinceLastRecord} days. Regular logging helps AI provide better insights.`,
            severity: 'info'
        });
    }
    return alerts;
}
function useAI(farmerId) {
    _s();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [alertCount, setAlertCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const getAIAdvice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAI.useCallback[getAIAdvice]": async (question, records)=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            setLoading(true);
            try {
                const model = genAI.getGenerativeModel({
                    model: 'gemini-2.0-flash'
                });
                const historyString = formatRecordsForAI(records);
                const prompt = `
        SYSTEM: You are "FarmPulse AI," a specialist poultry veterinarian and financial consultant for Nigerian farmers. 
        
        FARM DATA HISTORY:
        ${historyString}
        
        FARMER'S QUESTION: "${question}"
        
        INSTRUCTIONS: 
        - Use the DATA HISTORY to detect trends
        - If Mortality is increasing, be urgent and suggest quarantine or vet visit
        - If Cash Flow is negative, suggest efficiency tips
        - Keep answer under 100 words
        - Use professional, expert yet encouraging tone
        - If data is empty, provide general poultry startup advice
        - Include specific Nigerian market prices when relevant
      `;
                const result = await model.generateContent(prompt);
                const response = await result.response;
                setLoading(false);
                return {
                    success: true,
                    response: response.text()
                };
            } catch (err) {
                setLoading(false);
                const message = err instanceof Error ? err.message : 'AI request failed';
                // Handle Gemini quota errors specifically
                if (message.includes('429') || message.includes('quota') || message.includes('rate limit')) {
                    return {
                        success: false,
                        error: 'AI service is temporarily busy. Please try again in a few minutes.',
                        quotaExceeded: true
                    };
                }
                return {
                    success: false,
                    error: message
                };
            }
        }
    }["useAI.useCallback[getAIAdvice]"], []);
    const generateProactiveAlerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAI.useCallback[generateProactiveAlerts]": async (farmerId)=>{
            try {
                const [records, healthLogs] = await Promise.all([
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$daily$2d$records$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDailyRecords"])(farmerId, 10),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$health$2d$logs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHealthLogs"])(farmerId, 5)
                ]);
                const trendAlerts = analyzeTrends(records);
                for (const alert of trendAlerts){
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAlert"])({
                        ...alert,
                        farmer_id: farmerId
                    });
                }
                if (healthLogs.some({
                    "useAI.useCallback[generateProactiveAlerts]": (log)=>log.action.toLowerCase().includes('disease') || log.action.toLowerCase().includes('sick')
                }["useAI.useCallback[generateProactiveAlerts]"])) {
                    const diseaseAlert = {
                        farmer_id: farmerId,
                        alert_type: 'health',
                        title: '🏥 Health Issue Logged',
                        message: 'A health issue was recorded. Consider scheduling a vet visit and monitor affected birds closely.',
                        severity: 'warning'
                    };
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAlert"])(diseaseAlert);
                }
                return trendAlerts;
            } catch (err) {
                console.error('Failed to generate alerts:', err);
                return [];
            }
        }
    }["useAI.useCallback[generateProactiveAlerts]"], []);
    const fetchAlerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAI.useCallback[fetchAlerts]": async ()=>{
            if (!farmerId) return [];
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAlerts"])(farmerId);
        }
    }["useAI.useCallback[fetchAlerts]"], [
        farmerId
    ]);
    const fetchUnreadCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAI.useCallback[fetchUnreadCount]": async ()=>{
            if (!farmerId) return 0;
            return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnreadAlertCount"])(farmerId);
        }
    }["useAI.useCallback[fetchUnreadCount]"], [
        farmerId
    ]);
    const markAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAI.useCallback[markAsRead]": async (alertId)=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAlertAsRead"])(alertId);
            const count = await fetchUnreadCount();
            setAlertCount(count);
        }
    }["useAI.useCallback[markAsRead]"], [
        fetchUnreadCount
    ]);
    const markAllRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAI.useCallback[markAllRead]": async ()=>{
            if (!farmerId) return;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2f$alerts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markAllAlertsAsRead"])(farmerId);
            setAlertCount(0);
        }
    }["useAI.useCallback[markAllRead]"], [
        farmerId
    ]);
    const checkAndGenerateAlerts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useAI.useCallback[checkAndGenerateAlerts]": async ()=>{
            if (!farmerId) return;
            const currentCount = await fetchUnreadCount();
            setAlertCount(currentCount);
            if (currentCount === 0) {
                await generateProactiveAlerts(farmerId);
                const newCount = await fetchUnreadCount();
                setAlertCount(newCount);
            }
        }
    }["useAI.useCallback[checkAndGenerateAlerts]"], [
        farmerId,
        fetchUnreadCount,
        generateProactiveAlerts
    ]);
    return {
        loading,
        alertCount,
        getAIAdvice,
        fetchAlerts,
        fetchUnreadCount,
        markAsRead,
        markAllRead,
        checkAndGenerateAlerts,
        generateProactiveAlerts
    };
}
_s(useAI, "2sycaEt4bLdhz4XIfy+B6tkikxc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/StatsCards.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StatsCards",
    ()=>StatsCards
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function StatsCards({ stats }) {
    if (!stats) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
            children: [
                1,
                2,
                3
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-900/40 p-5 rounded-3xl border border-gray-800 animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 bg-gray-700 rounded w-1/2 mb-2"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/StatsCards.tsx",
                            lineNumber: 15,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-8 bg-gray-700 rounded w-3/4"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/StatsCards.tsx",
                            lineNumber: 16,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/dashboard/StatsCards.tsx",
                    lineNumber: 14,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/dashboard/StatsCards.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900/40 p-5 rounded-3xl border border-gray-800 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-gray-500 uppercase tracking-widest",
                                children: "Revenue"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/StatsCards.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-black text-white",
                                children: [
                                    "₦",
                                    stats.totalSales.toLocaleString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/StatsCards.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/StatsCards.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500",
                        children: "₦"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/StatsCards.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/StatsCards.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900/40 p-5 rounded-3xl border border-gray-800 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-gray-500 uppercase tracking-widest",
                                children: "Loss"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/StatsCards.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-black text-white",
                                children: [
                                    stats.totalMortality,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-normal",
                                        children: "Birds"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/StatsCards.tsx",
                                        lineNumber: 39,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/StatsCards.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/StatsCards.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-10 bg-red-500/10 rounded-full flex items-center justify-center text-red-500",
                        children: "💀"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/StatsCards.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/StatsCards.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900/40 p-5 rounded-3xl border border-gray-800 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-bold text-gray-500 uppercase tracking-widest",
                                children: "Avg Yield"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/StatsCards.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-black text-white",
                                children: [
                                    stats.avgProduction.toFixed(1),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-normal text-gray-400",
                                        children: "Crates"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard/StatsCards.tsx",
                                        lineNumber: 51,
                                        columnNumber: 46
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard/StatsCards.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/StatsCards.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 w-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500",
                        children: "🥚"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/StatsCards.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/StatsCards.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/StatsCards.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = StatsCards;
var _c;
__turbopack_context__.k.register(_c, "StatsCards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const Input = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className = '', label, error, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-xs text-slate-400 font-medium ml-1 mb-1.5 block",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui/Input.tsx",
                lineNumber: 15,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                className: `
            w-full p-4 rounded-xl
            bg-slate-800/40 backdrop-blur-sm
            border border-slate-700/50
            text-white placeholder-slate-500
            transition-all duration-200
            focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' : ''}
            ${className}
          `,
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/Input.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-red-400 ml-1",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/ui/Input.tsx",
                lineNumber: 35,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Input.tsx",
        lineNumber: 13,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = 'Input';
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
const variants = {
    primary: 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg shadow-emerald-500/20',
    secondary: 'bg-slate-700/50 hover:bg-slate-600/50 text-slate-200 border border-slate-600/30',
    danger: 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white',
    ghost: 'hover:bg-slate-800/50 text-slate-300',
    outline: 'bg-transparent border border-slate-600/50 hover:border-slate-500 hover:bg-slate-800/30 text-slate-300'
};
const sizes = {
    sm: 'px-3 py-2 text-sm rounded-lg',
    md: 'px-4 py-3 text-base rounded-xl',
    lg: 'px-6 py-4 text-lg rounded-xl'
};
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className = '', variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: ref,
        className: `
          font-semibold transition-all duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          active:scale-[0.98]
          ${variants[variant]}
          ${sizes[size]}
          ${className}
        `,
        disabled: disabled || loading,
        ...props,
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex items-center justify-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "animate-spin h-4 w-4",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            className: "opacity-25",
                            cx: "12",
                            cy: "12",
                            r: "10",
                            stroke: "currentColor",
                            strokeWidth: "4"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Button.tsx",
                            lineNumber: 44,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            className: "opacity-75",
                            fill: "currentColor",
                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12s5.373 12 12 12 8-8 8-8V0z"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Button.tsx",
                            lineNumber: 45,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/Button.tsx",
                    lineNumber: 43,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                "Processing..."
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/Button.tsx",
            lineNumber: 42,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0)) : children
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 28,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = 'Button';
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/forms/DailyLogForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DailyLogForm",
    ()=>DailyLogForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function DailyLogForm({ onSubmit, loading = false }) {
    _s();
    const [feedBags, setFeedBags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [feedCost, setFeedCost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [mortality, setMortality] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [production, setProduction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sales, setSales] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError('');
        const record = {
            feed_bags_used: feedBags ? parseFloat(feedBags) : 0,
            feed_cost: feedCost ? parseFloat(feedCost) : 0,
            mortality_count: mortality ? parseInt(mortality) : 0,
            production_amt: production ? parseFloat(production) : 0,
            sales_amount: sales ? parseFloat(sales) : 0,
            notes: notes || undefined,
            record_date: new Date().toISOString().split('T')[0]
        };
        const result = await onSubmit(record);
        if (result.success) {
            setFeedBags('');
            setFeedCost('');
            setMortality('');
            setProduction('');
            setSales('');
            setNotes('');
        } else {
            setError(result.error || 'Failed to save record');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "space-y-4",
        children: [
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/forms/DailyLogForm.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        type: "number",
                        step: "0.1",
                        placeholder: "0.0",
                        label: "Feed (Bags)",
                        value: feedBags,
                        onChange: (e)=>setFeedBags(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/forms/DailyLogForm.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        type: "number",
                        placeholder: "0",
                        label: "Feed Cost (₦)",
                        value: feedCost,
                        onChange: (e)=>setFeedCost(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/forms/DailyLogForm.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        type: "number",
                        placeholder: "0",
                        label: "Loss (Birds)",
                        value: mortality,
                        onChange: (e)=>setMortality(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/forms/DailyLogForm.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        type: "number",
                        placeholder: "0",
                        label: "Harvest (Crates)",
                        value: production,
                        onChange: (e)=>setProduction(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/forms/DailyLogForm.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forms/DailyLogForm.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                type: "number",
                placeholder: "0",
                label: "Sales (₦)",
                value: sales,
                onChange: (e)=>setSales(e.target.value)
            }, void 0, false, {
                fileName: "[project]/components/forms/DailyLogForm.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-[10px] text-gray-500 font-bold uppercase mb-1 block",
                        children: "Notes"
                    }, void 0, false, {
                        fileName: "[project]/components/forms/DailyLogForm.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "w-full p-4 rounded-xl bg-gray-900 border border-gray-800 text-white outline-none focus:border-green-500 transition-all resize-none",
                        placeholder: "Any observations...",
                        rows: 2,
                        value: notes,
                        onChange: (e)=>setNotes(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/components/forms/DailyLogForm.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/forms/DailyLogForm.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                className: "w-full",
                loading: loading,
                children: "Save Daily Records"
            }, void 0, false, {
                fileName: "[project]/components/forms/DailyLogForm.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/forms/DailyLogForm.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(DailyLogForm, "pj7Nsx4aRRTsMTX2c0VB5ihp4Xs=");
_c = DailyLogForm;
var _c;
__turbopack_context__.k.register(_c, "DailyLogForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/AIAlerts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIAlerts",
    ()=>AIAlerts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AIAlerts({ farmerId, fetchAlerts, onMarkRead, onMarkAllRead }) {
    _s();
    const [alerts, setAlerts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIAlerts.useEffect": ()=>{
            if (!farmerId) return;
            let cancelled = false;
            const load = {
                "AIAlerts.useEffect.load": async ()=>{
                    try {
                        const data = await fetchAlerts();
                        if (!cancelled) {
                            setAlerts(data);
                        }
                    } catch (err) {
                        console.error('Failed to load alerts:', err);
                    } finally{
                        if (!cancelled) {
                            setLoading(false);
                        }
                    }
                }
            }["AIAlerts.useEffect.load"];
            load();
            return ({
                "AIAlerts.useEffect": ()=>{
                    cancelled = true;
                }
            })["AIAlerts.useEffect"];
        }
    }["AIAlerts.useEffect"], [
        farmerId,
        fetchAlerts
    ]);
    const handleMarkRead = async (alertId)=>{
        await onMarkRead(alertId);
        setAlerts((prev)=>prev.map((a)=>a.id === alertId ? {
                    ...a,
                    is_read: true
                } : a));
    };
    const unreadCount = alerts.filter((a)=>!a.is_read).length;
    const displayedAlerts = showAll ? alerts : alerts.filter((a)=>!a.is_read).slice(0, 3);
    const getSeverityStyles = (severity)=>{
        switch(severity){
            case 'critical':
                return 'border-red-500/50 bg-red-500/10';
            case 'warning':
                return 'border-yellow-500/50 bg-yellow-500/10';
            default:
                return 'border-blue-500/30 bg-blue-500/10';
        }
    };
    const getSeverityIcon = (severity)=>{
        switch(severity){
            case 'critical':
                return '🚨';
            case 'warning':
                return '⚠️';
            default:
                return 'ℹ️';
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900/20 p-5 rounded-3xl border border-gray-800",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-pulse h-2 w-2 bg-yellow-500 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/AIAlerts.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] font-bold text-yellow-500 uppercase",
                        children: "Loading AI Alerts..."
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/AIAlerts.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/AIAlerts.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/dashboard/AIAlerts.tsx",
            lineNumber: 77,
            columnNumber: 7
        }, this);
    }
    if (alerts.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-900/20 p-5 rounded-3xl border border-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "animate-pulse h-2 w-2 bg-yellow-500 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/AIAlerts.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] font-bold text-yellow-500 uppercase",
                                children: "AI Alerts"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/AIAlerts.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-red-500 text-white text-xs px-2 py-0.5 rounded-full",
                                children: unreadCount
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/AIAlerts.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/AIAlerts.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    unreadCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onMarkAllRead,
                        className: "text-[10px] text-gray-400 hover:text-white",
                        children: "Mark all read"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/AIAlerts.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/AIAlerts.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3",
                children: displayedAlerts.map((alert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 rounded-2xl border ${getSeverityStyles(alert.severity)} cursor-pointer hover:opacity-80 transition-opacity`,
                        onClick: ()=>!alert.is_read && handleMarkRead(alert.id),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg",
                                    children: getSeverityIcon(alert.severity)
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/AIAlerts.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-bold text-white",
                                            children: alert.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/AIAlerts.tsx",
                                            lineNumber: 122,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400 mt-1",
                                            children: alert.message
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/AIAlerts.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-gray-500 mt-2",
                                            children: new Date(alert.created_at).toLocaleDateString('en-NG', {
                                                day: 'numeric',
                                                month: 'short',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard/AIAlerts.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/dashboard/AIAlerts.tsx",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                !alert.is_read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "h-2 w-2 bg-blue-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/components/dashboard/AIAlerts.tsx",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/dashboard/AIAlerts.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    }, alert.id, false, {
                        fileName: "[project]/components/dashboard/AIAlerts.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/dashboard/AIAlerts.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            alerts.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setShowAll(!showAll),
                className: "text-xs text-gray-500 hover:text-white mt-3 w-full text-center",
                children: showAll ? 'Show less' : `Show all ${alerts.length} alerts`
            }, void 0, false, {
                fileName: "[project]/components/dashboard/AIAlerts.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/AIAlerts.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
_s(AIAlerts, "mEoswsxY09qo5QpwbtqzJf5VX24=");
_c = AIAlerts;
var _c;
__turbopack_context__.k.register(_c, "AIAlerts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/AIConsultant.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AIConsultant",
    ()=>AIConsultant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AIConsultant({ onAsk, loading = false }) {
    _s();
    const [question, setQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleAsk = async ()=>{
        if (!question.trim()) return;
        setError('');
        const result = await onAsk(question, []);
        if (result.success && result.response) {
            setResponse(result.response);
        } else {
            setError(result.error || 'Failed to get response');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-blue-900/10 p-6 rounded-3xl border border-blue-500/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-blue-400 font-bold text-sm uppercase mb-3 flex items-center gap-2",
                children: "✨ Ask the AI Expert"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/AIConsultant.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: "w-full bg-black/50 border border-gray-800 rounded-xl p-4 text-sm mb-3 outline-none focus:border-blue-500 transition-all text-white",
                placeholder: "Ex: My birds are 4 weeks old and 5 died today, what should I do?",
                rows: 2,
                value: question,
                onChange: (e)=>setQuestion(e.target.value)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/AIConsultant.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: handleAsk,
                disabled: loading || !question.trim(),
                className: "w-full",
                loading: loading,
                children: "Get AI Diagnosis"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/AIConsultant.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/dashboard/AIConsultant.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this),
            response && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 p-5 bg-gray-900/80 rounded-2xl border border-blue-500/30 animate-in fade-in slide-in-from-bottom-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] text-blue-300 font-bold uppercase mb-2",
                        children: "AI Diagnosis:"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/AIConsultant.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm leading-relaxed text-gray-200",
                        children: response
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/AIConsultant.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/AIConsultant.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/AIConsultant.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(AIConsultant, "80VOkLsJABkuU/qQheuwcmMdCpQ=");
_c = AIConsultant;
var _c;
__turbopack_context__.k.register(_c, "AIConsultant");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAuth.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFarmData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useFarmData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useAI.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useToast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$StatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/StatsCards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$DailyLogForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/forms/DailyLogForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$AIAlerts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/AIAlerts.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$AIConsultant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/AIConsultant.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function Dashboard() {
    _s();
    const { user, loading: authLoading, logout, getStoredFarmerId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const { success, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const farmerId = user?.id || getStoredFarmerId();
    const { records, stats, loading: dataLoading, addRecord, addHealthLog, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFarmData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFarmData"])(farmerId);
    const { getAIAdvice, fetchAlerts, markAsRead, markAllRead, checkAndGenerateAlerts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAI"])(farmerId);
    const [vaccineName, setVaccineName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [questionLoading, setQuestionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            if (!authLoading && !user) {
                window.location.href = "/login";
            }
        }
    }["Dashboard.useEffect"], [
        authLoading,
        user
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            if (farmerId) {
                checkAndGenerateAlerts();
            }
        }
    }["Dashboard.useEffect"], [
        farmerId,
        checkAndGenerateAlerts
    ]);
    const handleLogout = async ()=>{
        await logout();
        window.location.href = "/login";
    };
    const handleSaveRecord = async (record)=>{
        return await addRecord(record);
    };
    const handleSaveVaccine = async ()=>{
        if (!vaccineName.trim()) return;
        const result = await addHealthLog({
            action: "Vaccination",
            details: vaccineName,
            cost: 0,
            record_date: new Date().toISOString().split('T')[0]
        });
        if (result.success) {
            setVaccineName("");
            success(`${vaccineName} recorded!`);
        } else {
            error(result.error || "Failed to save");
        }
    };
    const handleAskAI = async (question)=>{
        if (!question.trim()) return {
            success: false,
            error: 'Please enter a question'
        };
        setQuestionLoading(true);
        const result = await getAIAdvice(question, records);
        setQuestionLoading(false);
        return result;
    };
    if (authLoading || dataLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#050505] text-white flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-pulse text-4xl mb-4",
                        children: "🌾"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400",
                        children: "Loading your farm..."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 90,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this);
    }
    if (!user) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#050505] text-white p-5 font-sans pb-24 text-left",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6 pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-extrabold tracking-tighter text-green-500",
                                children: "FarmTrack"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-xs font-medium uppercase tracking-widest",
                                children: [
                                    user.farm_type || 'Poultry',
                                    " Vault"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLogout,
                        className: "h-10 w-10 bg-red-500/10 rounded-full border border-red-500/20 flex items-center justify-center text-red-500 text-xs font-bold",
                        children: "Exit"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$StatsCards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatsCards"], {
                stats: stats
            }, void 0, false, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 px-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400 text-sm",
                                    children: [
                                        "Welcome back, ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white font-bold",
                                            children: user.full_name || user.name || 'Farmer'
                                        }, void 0, false, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$AIAlerts$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIAlerts"], {
                                farmerId: farmerId,
                                fetchAlerts: fetchAlerts,
                                onMarkRead: markAsRead,
                                onMarkAllRead: markAllRead
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "bg-gray-900/10 p-6 rounded-3xl border border-gray-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-bold mb-6",
                                        children: "Daily Performance Log"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$forms$2f$DailyLogForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DailyLogForm"], {
                                        onSubmit: handleSaveRecord,
                                        loading: dataLoading
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 145,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$AIConsultant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AIConsultant"], {
                                onAsk: handleAskAI,
                                loading: questionLoading
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "bg-gray-900/20 p-6 rounded-3xl border border-gray-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-sm font-bold text-gray-400 uppercase tracking-widest",
                                                children: "Recent Activity"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: refresh,
                                                className: "text-[10px] text-green-500 font-bold uppercase",
                                                children: "Refresh"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: records.length > 0 ? records.slice(0, 5).map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-black/40 p-4 rounded-2xl border border-gray-800 flex justify-between items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-[10px] text-gray-500 font-bold uppercase mb-1",
                                                                children: new Date(item.record_date).toLocaleDateString('en-NG', {
                                                                    day: 'numeric',
                                                                    month: 'short'
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 172,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex gap-3 items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs",
                                                                        children: [
                                                                            "🥚 ",
                                                                            item.production_amt
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 176,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-red-400",
                                                                        children: [
                                                                            "💀 ",
                                                                            item.mortality_count
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                                        lineNumber: 177,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/dashboard/page.tsx",
                                                                lineNumber: 175,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 171,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-green-500",
                                                        children: [
                                                            "₦",
                                                            item.sales_amount?.toLocaleString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/dashboard/page.tsx",
                                                        lineNumber: 180,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, item.id, true, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 19
                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "py-8 px-4 text-center border-2 border-dashed border-gray-800 rounded-3xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl mb-3",
                                                    children: "🚀"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-white font-bold text-sm mb-1",
                                                    children: "Your Vault is Empty"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-[11px] leading-relaxed mb-4",
                                                    children: "Start by logging your feed and harvest to see your first farm insights."
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "inline-block bg-green-500/10 text-green-500 text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-green-500/20",
                                                    children: "Ready for entry #1"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/dashboard/page.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/page.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "bg-gray-900/10 p-6 rounded-3xl border border-dashed border-gray-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-sm font-bold text-gray-500 uppercase tracking-widest mb-4",
                                        children: "Health Logs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Record Vaccine (e.g. Gumboro)",
                                        className: "w-full bg-transparent border-b border-gray-800 py-2 text-sm mb-4 outline-none focus:border-green-500 text-white",
                                        value: vaccineName,
                                        onChange: (e)=>setVaccineName(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleSaveVaccine,
                                        disabled: !vaccineName.trim() || dataLoading,
                                        className: "text-[10px] font-bold text-green-500 uppercase tracking-tighter hover:underline disabled:opacity-50",
                                        children: "+ Log Vaccine Entry"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                className: "grid grid-cols-3 gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/batches",
                                        className: "bg-gray-800/50 p-4 rounded-2xl text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl mb-1",
                                                children: "🐣"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-bold",
                                                children: "Batches"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/inventory",
                                        className: "bg-gray-800/50 p-4 rounded-2xl text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl mb-1",
                                                children: "📦"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 224,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-bold",
                                                children: "Inventory"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/expenses",
                                        className: "bg-gray-800/50 p-4 rounded-2xl text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl mb-1",
                                                children: "💸"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 228,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-bold",
                                                children: "Expenses"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.tsx",
                                                lineNumber: 229,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/dashboard/page.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "wJvlcaIH+vfswErTDBkRcZXRNQk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useToast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useFarmData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFarmData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useAI$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAI"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0t9xknk._.js.map